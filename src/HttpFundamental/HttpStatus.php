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

/**
 * List of HTTP status codes
 * 
 * This class only defines constants of defined HTTP protocol's status codes as specified
 * in [RFC 2616](http://tools.ietf.org/html/rfc2616) and [RFC 3648](http://tools.ietf.org/html/rfc3648).
 * 
 * @author  piwi <me@e-piwi.fr>
 */
class HttpStatus
{

    const OK                     = '200 OK';
    const NO_CONTENT             = '204 No Content';
    const MOVED_PERMANENTLY      = '301 Moved Permanently';
    const MOVED_TEMPORARILY      = '302 Moved Temporarily';
    const NOT_MODIFIED           = '304 Not Modified';
    const BAD_REQUEST            = '400 Bad Request';
    const UNAUTHORIZED           = '401 Unauthorized';
    const FORBIDDEN              = '403 Forbidden';
    const NOT_FOUND              = '404 Not Found';
    const METHOD_NOT_ALLOWED     = '405 Method Not Allowed';
    const GONE                   = '410 Gone';
    const UNPROCESSABLE_ENTITY   = '422 Unprocessable Entity';
    const ERROR                  = '500 Internal Server Error';
}
