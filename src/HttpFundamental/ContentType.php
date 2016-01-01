<?php
/**
 * This file is part of the HTTP Fundamental package.
 *
 * Copyright (c) 2013-2016 Pierre Cassat <me@e-piwi.fr> and contributors
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

use \HttpFundamental\ContentTypeInterface;
use \HttpFundamental\Response;
use \Library\Helper\Text as TextHelper;

/**
 * @author  piwi <me@e-piwi.fr>
 */
class ContentType
{

    /**
     * @var string
     */
    protected $content_type;

    /**
     * @var object implementing the `\HttpFundamental\ContentTypeInterface`
     */
    protected $content_type_object;

    /**
     */
    public static $content_types = array(
        'html' => 'text/html',
        'text' => 'text/plain',
        'css' => 'text/css',
        'xml' => 'application/xml',
        'javascript' => 'application/x-javascript',
        'json' => 'application/json',
    );

    /**
     * Create a new ContentType object extracting the type from a content string
     *
     * @param string $content
     * @return self
     */
    public static function createFromContent($content)
    {
        return new self(self::guessContentType($content));
    }

    /**
     * @param string $content
     * @return string
     */
    public static function guessContentType($content)
    {
        $finfo = new \finfo();
        return $finfo->buffer($content, FILEINFO_MIME);
    }

    /**
     * Constructor : defines the current URL and gets the routes
     *
     * @param string $content_type
     */
    public function __construct($content_type)
    {
        $this->prepareContentType($content_type);
    }

    /**
     * @return string
     */
    public function __toString()
    {
        return $this->getContentType();
    }

// ----------------------
// Setters / Getters
// ----------------------

    /**
     * @param   string $content_type
     * @return  self
     * @throws  \Exception if the content_type was not declared and unknown
     */
    public function setContentType($content_type)
    {
        if (in_array($content_type, self::$content_types)) {
            $this->content_type = $content_type;
        } elseif (array_key_exists($content_type, self::$content_types)) {
            $this->content_type = self::$content_types[$content_type];
        } else {
            throw new \Exception(
                sprintf('Unknown content type "%s"!', $content_type)
            );
        }
        return $this;
    }

    /**
     * @return string
     */
    public function getContentType()
    {
        return $this->content_type;
    }

    /**
     * @param \HttpFundamental\ContentTypeInterface $content_type_object
     * @return self
     */
    public function setContentTypeObject(ContentTypeInterface $content_type_object)
    {
        $this->content_type_object = $content_type_object;
        $this->setContentType($this->content_type_object->getContentType());
        return $this;
    }

    /**
     * @return object|null Object implementing the `\HttpFundamental\ContentTypeInterface`
     */
    public function getContentTypeObject()
    {
        return $this->content_type_object;
    }

// ----------------------
// Process
// ----------------------

    /**
     * @param string $content_type
     * @return self
     */
    public function prepareContentType($content_type)
    {
        $_cls = '\HttpFundamental\ContentType\\'.TextHelper::toCamelCase($content_type);
        if (class_exists($_cls)) {
            return $this->setContentTypeObject(new $_cls);
        } else {
            return $this->setContentType($content_type);
        }
    }

    /**
     * Prepare the content of the response before to send it to client
     *
     * @param \HttpFundamental\Response $response
     * @return void
     */
    public function prepareResponse(Response $response)
    {
        $cto = $this->getContentTypeObject();
        if (!empty($cto)) {
            $ctt_type = $cto->getContentType();
        } else {
            $ctt_type = $this->getContentType();
        }
        $response->setContentType($ctt_type);
    }

    /**
     * Parse an input content
     *
     * @param string $content
     * @return mixed
     */
    public function parseContent($content)
    {
        $cto = $this->getContentTypeObject();
        if (!empty($cto)) {
            return $cto->parseContent($content);
        } else {
            return $content;
        }
    }

    /**
     * Prepare a content for output
     *
     * @param mixed $content
     * @return string
     */
    public function prepareContent($content)
    {
        $cto = $this->getContentTypeObject();
        if (!empty($cto)) {
            return $cto->prepareContent($content);
        } else {
            return (string) $content;
        }
    }
}
