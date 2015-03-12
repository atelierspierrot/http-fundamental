<?php
/**
 * This file is part of the HTTP Fundamental package.
 *
 * Copyright (c) 2013-2015 Pierre Cassat <me@e-piwi.fr> and contributors
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * The source code of this package is available online at 
 * <http://github.com/atelierspierrot/http-fundamental>.
 */
namespace HttpFundamental;

use \Patterns\Interfaces\ResponseInterface;

/**
 * The global HTTP response class
 *
 * @author  piwi <me@e-piwi.fr>
 */
class Response
    implements ResponseInterface
{

    /**
     * @var string
     */
    protected $protocol = 'HTTP/1.1';

    /**
     * @var string
     */
    protected $status;

    /**
     * @var array The response headers registry
     */
    protected $headers = array();

    /**
     * @var array The response contents
     */
    protected $contents = array();

    /**
     * @var string The response character set
     */
    protected $charset  = 'utf-8';

    /**
     * @var \HttpFundamental\ContentType
     */
    protected $content_type;

    /**
     * @var array
     * @TODO : use only objects of the \HttpFundamental\ContentType namespace
     */
    static $content_types = array(
        'html'          => 'text/html',
        'text'          => 'text/plain',
        'css'           => 'text/css',
        'xml'           => 'application/xml',
        'javascript'    => 'application/x-javascript',
        'json'          => 'application/json',
    );

    /**
     * Constructor : defines the current URL and gets the routes
     *
     * @param string|null $content
     * @param string|null $charset
     */
    public function __construct($content = null, $charset = null)
    {
        if (!empty($content)) {
            if (is_array($content)) {
                $this->setContents($content);
            } else {
                $this->addContent(null, $content);
            }
        }
        if (!empty($charset)) $this->setCharset($charset);
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return $this->send(null, null, true);
    }

// ----------------------
// Setters / Getters
// ----------------------

    /**
     * @param $value
     * @return $this
     */
    public function setProtocol($value)
    {
        $this->protocol = $value;
        return $this;
    }

    /**
     * @return string
     */
    public function getProtocol()
    {
        return $this->protocol;
    }

    /**
     * @param $flag
     * @return $this
     */
    public function setStatus($flag)
    {
        $this->status = $flag;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @param $string
     * @return $this
     */
    public function setCharset($string)
    {
        $this->charset = $string;
        return $this;
    }

    /**
     * @return string
     */
    public function getCharset()
    {
        return $this->charset;
    }

    /**
     * @param string $name
     * @param mixed $content
     * @return $this
     */
    public function addContent($name, $content)
    {
        if (is_null($name)) {
            array_push($this->contents, $content);
        } else {
            $this->contents[$name] = $content;
        }
        return $this;
    }

    /**
     * @param array $contents
     * @return $this
     */
    public function setContents(array $contents)
    {
        $this->contents = array_merge($this->contents, $contents);
        return $this;
    }

    /**
     * @param $name
     * @param null $default
     * @return null
     */
    public function getContent($name, $default = null)
    {
        return array_key_exists($name, $this->contents) ? $this->contents[$name] : $default;
    }

    /**
     * @return array
     */
    public function getContents()
    {
        return $this->contents;
    }

    /**
     * @return string
     */
    public function getContentsAsString()
    {
        $content = '';
        foreach ($this->contents as $key=>$ctt) {
            $content .= $ctt;
        }
        return $content;
    }

    /**
     * @param string $type
     * @return self
     */
    public function setContentType($type) 
    {
        $this->content_type = new ContentType($type);
        return $this;
    }

    /**
     * @return object
     */
    public function getContentType() 
    {
        return $this->content_type;
    }

    /**
     * @return self
     */
    public function guessContentType() 
    {
        $this->content_type = ContentType::createFromContent($this->getContentsAsString());
        return $this;
    }

// ------------------
// Headers management
// ------------------

    /**
     * @param   array   $params
     * @return  self
     */
    public function setHeaders(array $params)
    {
        $this->headers = $params;
        return $this;
    }

    /**
     * @param   string  $name
     * @param   string  $value
     * @return  self
     */
    public function addHeader($name, $value = null)
    {
        $this->headers[$name] = $value;
        return $this;
    }

    /**
     * @return  array
     */
    public function getHeaders()
    {
        return $this->headers;
    }

    /**
     * @param   string  $name
     * @return  string|null
     */
    public function getHeader($name)
    {
        return isset($this->headers[$name]) ? $this->headers[$name] : (
        isset($this->headers[strtolower($name)]) ? $this->headers[strtolower($name)] : null
        );
    }

    /**
     * @param   string  $name
     * @return  bool
     */
    public function hasHeader($name)
    {
        return (bool) (isset($this->headers[$name]) || isset($this->headers[strtolower($name)]));
    }

// ----------------------
// Send
// ----------------------

    /**
     * @return void
     */
    public function renderHeaders()
    {
        self::header($this->getProtocol() . ' ' . $this->getStatus());
        foreach ($this->getHeaders() as $header=>$content) {
            self::header(ucfirst($header) . ': ' . $content);
        }
    }

    /**
     * Writes a header string if headers had not been sent
     *
     * @param string $str The header string
     */
    public static function header($str)
    {
        if (!headers_sent()) {
            header($str);
        }
    }

    /**
     * Send the response to the device
     *
     * @param null $content
     * @param null $type
     * @param bool $return_string
     * @return mixed
     */
    public function send($content = null, $type = null, $return_string = false)
    {
        if (empty($this->content_type)) $this->guessContentType();

        $existing_content_type = $this->getHeader('Content-type');
        if (empty($existing_content_type)) {
            $this->addHeader('Content-type', $this->content_type.'; charset='.strtoupper($this->getCharset()));
        }
        $this->renderHeaders();

        $response = $this->content_type->prepareContent($this->getContents());
        if ($return_string) {
            return $response;
        } else {
            echo $response;
            exit("\n");
        }
    }

    /**
     * Force client to download a file
     *
     * @param null $file
     * @param null $type
     * @param null $file_name
     */
    public function download($file = null, $type = null, $file_name = null)
    {
        if (!empty($file) && @file_exists($file)) {
            if (is_null($file_name)) {
                $file_name_parts = explode('/', $file);
                $file_name = end( $file_name_parts );
            }
            $this->addHeader('Content-disposition', 'attachment; filename='.$file_name);
            $this->addHeader('Content-Type', 'application/force-download');
            $this->addHeader('Content-Transfer-Encoding', $type);
            $this->addHeader('Content-Length', filesize($file));
            $this->addHeader('Pragma', 'no-cache');
            $this->addHeader('Cache-Control', 'must-revalidate, post-check=0, pre-check=0, public');
            $this->addHeader('Expires', '0'); 
            $this->renderHeaders();
            readfile( $file );
            exit;
        }
        return;
    }

    /**
     * Flush (display) a file content
     *
     * @param null $file_content
     * @param null $type
     */
    public function flush($file_content = null, $type = null)
    {
        if (!empty($file_content)) {
            if (empty($type)) {
                $finfo = new \finfo();
                $type = $finfo->buffer($file_content, FILEINFO_MIME);
            }
            $this->addHeader('Content-Type', $type);
            $this->renderHeaders();
            echo $file_content;
            exit;
        }
        return;
    }

    /**
     * @param string $url
     * @param bool $permanent
     */
    public function redirect($url, $permanent = false)
    {
        if ($permanent) {
            $this->addHeader('Status', HttpStatus::MOVED_PERMANENTLY);
        } else {
            $this->addHeader('Status', HttpStatus::MOVED_TEMPORARILY);
        }
        $this->addHeader('location', $url);
    }
    
}

// Endfile
