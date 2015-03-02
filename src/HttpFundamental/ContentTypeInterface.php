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

use \HttpFundamental\Response;

/**
 */
interface ContentTypeInterface
{

    /**
     * Prepare the content of the response before to send it to client
     *
     * @param \HttpFundamental\Response $response
     * @return void
     */
    public function prepareResponse(Response $response);

    /**
     * Parse an input content
     *
     * @param string $content
     * @return string|array
     */
    public function parseContent($content);

    /**
     * Prepare a content for output
     *
     * @param string|array $content
     * @return string
     */
    public function prepareContent($content);

    /**
     * Get the "content-Type" header value
     *
     * @return string
     */
    public static function getContentType();

}

// Endfile