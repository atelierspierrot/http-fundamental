<?php
/**
 * PHP Library package of Les Ateliers Pierrot
 * Copyleft (c) 2013 Pierre Cassat and contributors
 * <www.ateliers-pierrot.fr> - <contact@ateliers-pierrot.fr>
 * License GPL-3.0 <http://www.opensource.org/licenses/gpl-3.0.html>
 * Sources <https://github.com/atelierspierrot/library>
 */
namespace Library\HttpFundamental\ContentType;

use \Library\HttpFundamental\ContentTypeInterface;
use \Library\HttpFundamental\Response;

/**
 * @author      Piero Wbmstr <piero.wbmstr@gmail.com>
 */
class Json
    implements ContentTypeInterface
{

    /**
     * Prepare the content of the response before to send it to client
     *
     * @param object $response \Library\HttpFundamental\Response
     * @return void
     */
    public function prepareResponse(Response $response)
    {
    }

    /**
     * Parse an input content
     *
     * @param string $content
     * @return misc
     */
    public function parseContent($content)
    {
        return (array) json_decode($content, true);
    }

    /**
     * Prepare a content for output
     *
     * @param misc $content
     * @return string
     */
    public function prepareContent($content)
    {
        if (!is_array($content)) $content = array($content);
        return json_encode($content);
    }

    /**
     * Get the "content-Type" header value
     *
     * @return string
     */
    public static function getContentType()
    {
        return 'application/json';
    }

}

// Endfile
