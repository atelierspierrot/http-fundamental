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
namespace HttpFundamental\ContentType;

use \HttpFundamental\ContentTypeInterface;
use \HttpFundamental\Response;
use \Library\Converter\Html2Text;

/**
 * @author  piwi <me@e-piwi.fr>
 */
class PlainText
    implements ContentTypeInterface
{

    /**
     * Prepare the content of the response before to send it to client
     *
     * @param \HttpFundamental\Response $response
     * @return void
     */
    public function prepareResponse(Response $response)
    {
    }

    /**
     * Parse an input content
     *
     * @param string $content
     * @return mixed
     */
    public function parseContent($content)
    {
        return (string) $content;
    }

    /**
     * Prepare a content for output
     *
     * @param mixed $content
     * @return string
     */
    public function prepareContent($content)
    {
        if (is_array($content)) {
            $ctt = '';
            foreach ($content as $key=>$ctt) {
                $content .= $ctt;
            }
            $content = $ctt;
        }
        $_escaped_output = strip_tags((string) $content);
        if ($_escaped_output != (string) $content) {
            if (preg_match('/(.*)<body(.*)</body>/i', (string) $content, $matches)) {
                $_output = $matches[0];
            } else {
                $_output = (string) $content;
            }
            $content = Html2Text::convert($_output);
        }
        return (string) $content;
    }

    /**
     * Get the "content-Type" header value
     *
     * @return string
     */
    public static function getContentType()
    {
        return 'text/plain';
    }
}
