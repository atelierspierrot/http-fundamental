
(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:HttpFundamental" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="HttpFundamental.html">HttpFundamental</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:HttpFundamental_ContentType" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="HttpFundamental/ContentType.html">ContentType</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:HttpFundamental_ContentType_Html" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HttpFundamental/ContentType/Html.html">Html</a>                    </div>                </li>                            <li data-name="class:HttpFundamental_ContentType_Json" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HttpFundamental/ContentType/Json.html">Json</a>                    </div>                </li>                            <li data-name="class:HttpFundamental_ContentType_PlainText" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HttpFundamental/ContentType/PlainText.html">PlainText</a>                    </div>                </li>                            <li data-name="class:HttpFundamental_ContentType_Xml" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HttpFundamental/ContentType/Xml.html">Xml</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:HttpFundamental_ContentType" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="HttpFundamental/ContentType.html">ContentType</a>                    </div>                </li>                            <li data-name="class:HttpFundamental_ContentTypeInterface" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="HttpFundamental/ContentTypeInterface.html">ContentTypeInterface</a>                    </div>                </li>                            <li data-name="class:HttpFundamental_Cookie" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="HttpFundamental/Cookie.html">Cookie</a>                    </div>                </li>                            <li data-name="class:HttpFundamental_HttpStatus" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="HttpFundamental/HttpStatus.html">HttpStatus</a>                    </div>                </li>                            <li data-name="class:HttpFundamental_Request" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="HttpFundamental/Request.html">Request</a>                    </div>                </li>                            <li data-name="class:HttpFundamental_Response" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="HttpFundamental/Response.html">Response</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "HttpFundamental.html", "name": "HttpFundamental", "doc": "Namespace HttpFundamental"},{"type": "Namespace", "link": "HttpFundamental/ContentType.html", "name": "HttpFundamental\\ContentType", "doc": "Namespace HttpFundamental\\ContentType"},
            {"type": "Interface", "fromName": "HttpFundamental", "fromLink": "HttpFundamental.html", "link": "HttpFundamental/ContentTypeInterface.html", "name": "HttpFundamental\\ContentTypeInterface", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "HttpFundamental\\ContentTypeInterface", "fromLink": "HttpFundamental/ContentTypeInterface.html", "link": "HttpFundamental/ContentTypeInterface.html#method_prepareResponse", "name": "HttpFundamental\\ContentTypeInterface::prepareResponse", "doc": "&quot;Prepare the content of the response before to send it to client&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentTypeInterface", "fromLink": "HttpFundamental/ContentTypeInterface.html", "link": "HttpFundamental/ContentTypeInterface.html#method_parseContent", "name": "HttpFundamental\\ContentTypeInterface::parseContent", "doc": "&quot;Parse an input content&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentTypeInterface", "fromLink": "HttpFundamental/ContentTypeInterface.html", "link": "HttpFundamental/ContentTypeInterface.html#method_prepareContent", "name": "HttpFundamental\\ContentTypeInterface::prepareContent", "doc": "&quot;Prepare a content for output&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentTypeInterface", "fromLink": "HttpFundamental/ContentTypeInterface.html", "link": "HttpFundamental/ContentTypeInterface.html#method_getContentType", "name": "HttpFundamental\\ContentTypeInterface::getContentType", "doc": "&quot;Get the \&quot;content-Type\&quot; header value&quot;"},
            
            
            {"type": "Class", "fromName": "HttpFundamental", "fromLink": "HttpFundamental.html", "link": "HttpFundamental/ContentType.html", "name": "HttpFundamental\\ContentType", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType.html#method_createFromContent", "name": "HttpFundamental\\ContentType::createFromContent", "doc": "&quot;Create a new ContentType object extracting the type from a content string&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType.html#method_guessContentType", "name": "HttpFundamental\\ContentType::guessContentType", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType.html#method___construct", "name": "HttpFundamental\\ContentType::__construct", "doc": "&quot;Constructor : defines the current URL and gets the routes&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType.html#method___toString", "name": "HttpFundamental\\ContentType::__toString", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType.html#method_setContentType", "name": "HttpFundamental\\ContentType::setContentType", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType.html#method_getContentType", "name": "HttpFundamental\\ContentType::getContentType", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType.html#method_setContentTypeObject", "name": "HttpFundamental\\ContentType::setContentTypeObject", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType.html#method_getContentTypeObject", "name": "HttpFundamental\\ContentType::getContentTypeObject", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType.html#method_prepareContentType", "name": "HttpFundamental\\ContentType::prepareContentType", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType.html#method_prepareResponse", "name": "HttpFundamental\\ContentType::prepareResponse", "doc": "&quot;Prepare the content of the response before to send it to client&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType.html#method_parseContent", "name": "HttpFundamental\\ContentType::parseContent", "doc": "&quot;Parse an input content&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType.html#method_prepareContent", "name": "HttpFundamental\\ContentType::prepareContent", "doc": "&quot;Prepare a content for output&quot;"},
            
            {"type": "Class", "fromName": "HttpFundamental", "fromLink": "HttpFundamental.html", "link": "HttpFundamental/ContentTypeInterface.html", "name": "HttpFundamental\\ContentTypeInterface", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "HttpFundamental\\ContentTypeInterface", "fromLink": "HttpFundamental/ContentTypeInterface.html", "link": "HttpFundamental/ContentTypeInterface.html#method_prepareResponse", "name": "HttpFundamental\\ContentTypeInterface::prepareResponse", "doc": "&quot;Prepare the content of the response before to send it to client&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentTypeInterface", "fromLink": "HttpFundamental/ContentTypeInterface.html", "link": "HttpFundamental/ContentTypeInterface.html#method_parseContent", "name": "HttpFundamental\\ContentTypeInterface::parseContent", "doc": "&quot;Parse an input content&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentTypeInterface", "fromLink": "HttpFundamental/ContentTypeInterface.html", "link": "HttpFundamental/ContentTypeInterface.html#method_prepareContent", "name": "HttpFundamental\\ContentTypeInterface::prepareContent", "doc": "&quot;Prepare a content for output&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentTypeInterface", "fromLink": "HttpFundamental/ContentTypeInterface.html", "link": "HttpFundamental/ContentTypeInterface.html#method_getContentType", "name": "HttpFundamental\\ContentTypeInterface::getContentType", "doc": "&quot;Get the \&quot;content-Type\&quot; header value&quot;"},
            
            {"type": "Class", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType/Html.html", "name": "HttpFundamental\\ContentType\\Html", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "HttpFundamental\\ContentType\\Html", "fromLink": "HttpFundamental/ContentType/Html.html", "link": "HttpFundamental/ContentType/Html.html#method_prepareResponse", "name": "HttpFundamental\\ContentType\\Html::prepareResponse", "doc": "&quot;Prepare the content of the response before to send it to client&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType\\Html", "fromLink": "HttpFundamental/ContentType/Html.html", "link": "HttpFundamental/ContentType/Html.html#method_parseContent", "name": "HttpFundamental\\ContentType\\Html::parseContent", "doc": "&quot;Parse an input content&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType\\Html", "fromLink": "HttpFundamental/ContentType/Html.html", "link": "HttpFundamental/ContentType/Html.html#method_prepareContent", "name": "HttpFundamental\\ContentType\\Html::prepareContent", "doc": "&quot;Prepare a content for output&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType\\Html", "fromLink": "HttpFundamental/ContentType/Html.html", "link": "HttpFundamental/ContentType/Html.html#method_getContentType", "name": "HttpFundamental\\ContentType\\Html::getContentType", "doc": "&quot;Get the \&quot;content-Type\&quot; header value&quot;"},
            
            {"type": "Class", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType/Json.html", "name": "HttpFundamental\\ContentType\\Json", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "HttpFundamental\\ContentType\\Json", "fromLink": "HttpFundamental/ContentType/Json.html", "link": "HttpFundamental/ContentType/Json.html#method_prepareResponse", "name": "HttpFundamental\\ContentType\\Json::prepareResponse", "doc": "&quot;Prepare the content of the response before to send it to client&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType\\Json", "fromLink": "HttpFundamental/ContentType/Json.html", "link": "HttpFundamental/ContentType/Json.html#method_parseContent", "name": "HttpFundamental\\ContentType\\Json::parseContent", "doc": "&quot;Parse an input content&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType\\Json", "fromLink": "HttpFundamental/ContentType/Json.html", "link": "HttpFundamental/ContentType/Json.html#method_prepareContent", "name": "HttpFundamental\\ContentType\\Json::prepareContent", "doc": "&quot;Prepare a content for output&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType\\Json", "fromLink": "HttpFundamental/ContentType/Json.html", "link": "HttpFundamental/ContentType/Json.html#method_getContentType", "name": "HttpFundamental\\ContentType\\Json::getContentType", "doc": "&quot;Get the \&quot;content-Type\&quot; header value&quot;"},
            
            {"type": "Class", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType/PlainText.html", "name": "HttpFundamental\\ContentType\\PlainText", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "HttpFundamental\\ContentType\\PlainText", "fromLink": "HttpFundamental/ContentType/PlainText.html", "link": "HttpFundamental/ContentType/PlainText.html#method_prepareResponse", "name": "HttpFundamental\\ContentType\\PlainText::prepareResponse", "doc": "&quot;Prepare the content of the response before to send it to client&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType\\PlainText", "fromLink": "HttpFundamental/ContentType/PlainText.html", "link": "HttpFundamental/ContentType/PlainText.html#method_parseContent", "name": "HttpFundamental\\ContentType\\PlainText::parseContent", "doc": "&quot;Parse an input content&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType\\PlainText", "fromLink": "HttpFundamental/ContentType/PlainText.html", "link": "HttpFundamental/ContentType/PlainText.html#method_prepareContent", "name": "HttpFundamental\\ContentType\\PlainText::prepareContent", "doc": "&quot;Prepare a content for output&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType\\PlainText", "fromLink": "HttpFundamental/ContentType/PlainText.html", "link": "HttpFundamental/ContentType/PlainText.html#method_getContentType", "name": "HttpFundamental\\ContentType\\PlainText::getContentType", "doc": "&quot;Get the \&quot;content-Type\&quot; header value&quot;"},
            
            {"type": "Class", "fromName": "HttpFundamental\\ContentType", "fromLink": "HttpFundamental/ContentType.html", "link": "HttpFundamental/ContentType/Xml.html", "name": "HttpFundamental\\ContentType\\Xml", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "HttpFundamental\\ContentType\\Xml", "fromLink": "HttpFundamental/ContentType/Xml.html", "link": "HttpFundamental/ContentType/Xml.html#method_prepareResponse", "name": "HttpFundamental\\ContentType\\Xml::prepareResponse", "doc": "&quot;Prepare the content of the response before to send it to client&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType\\Xml", "fromLink": "HttpFundamental/ContentType/Xml.html", "link": "HttpFundamental/ContentType/Xml.html#method_parseContent", "name": "HttpFundamental\\ContentType\\Xml::parseContent", "doc": "&quot;Parse an input content&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType\\Xml", "fromLink": "HttpFundamental/ContentType/Xml.html", "link": "HttpFundamental/ContentType/Xml.html#method_prepareContent", "name": "HttpFundamental\\ContentType\\Xml::prepareContent", "doc": "&quot;Prepare a content for output&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\ContentType\\Xml", "fromLink": "HttpFundamental/ContentType/Xml.html", "link": "HttpFundamental/ContentType/Xml.html#method_getContentType", "name": "HttpFundamental\\ContentType\\Xml::getContentType", "doc": "&quot;Get the \&quot;content-Type\&quot; header value&quot;"},
            
            {"type": "Class", "fromName": "HttpFundamental", "fromLink": "HttpFundamental.html", "link": "HttpFundamental/Cookie.html", "name": "HttpFundamental\\Cookie", "doc": "&quot;\n&quot;"},
                                                        {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method___construct", "name": "HttpFundamental\\Cookie::__construct", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_setFlag", "name": "HttpFundamental\\Cookie::setFlag", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getFlag", "name": "HttpFundamental\\Cookie::getFlag", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_setName", "name": "HttpFundamental\\Cookie::setName", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getName", "name": "HttpFundamental\\Cookie::getName", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_setValue", "name": "HttpFundamental\\Cookie::setValue", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getValue", "name": "HttpFundamental\\Cookie::getValue", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getSafeValue", "name": "HttpFundamental\\Cookie::getSafeValue", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_setExpire", "name": "HttpFundamental\\Cookie::setExpire", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getExpire", "name": "HttpFundamental\\Cookie::getExpire", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getSafeExpire", "name": "HttpFundamental\\Cookie::getSafeExpire", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_setPath", "name": "HttpFundamental\\Cookie::setPath", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getPath", "name": "HttpFundamental\\Cookie::getPath", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getSafePath", "name": "HttpFundamental\\Cookie::getSafePath", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_setDomain", "name": "HttpFundamental\\Cookie::setDomain", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getDomain", "name": "HttpFundamental\\Cookie::getDomain", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getSafeDomain", "name": "HttpFundamental\\Cookie::getSafeDomain", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_setSecure", "name": "HttpFundamental\\Cookie::setSecure", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getSecure", "name": "HttpFundamental\\Cookie::getSecure", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getSafeSecure", "name": "HttpFundamental\\Cookie::getSafeSecure", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_setHttponly", "name": "HttpFundamental\\Cookie::setHttponly", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getHttponly", "name": "HttpFundamental\\Cookie::getHttponly", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getSafeHttponly", "name": "HttpFundamental\\Cookie::getSafeHttponly", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_sendAsRaw", "name": "HttpFundamental\\Cookie::sendAsRaw", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_sendAsEncoded", "name": "HttpFundamental\\Cookie::sendAsEncoded", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_setCookieFuncArguments", "name": "HttpFundamental\\Cookie::setCookieFuncArguments", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getCookieFuncArguments", "name": "HttpFundamental\\Cookie::getCookieFuncArguments", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_getCookieFuncArgument", "name": "HttpFundamental\\Cookie::getCookieFuncArgument", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_addCookieFuncArgument", "name": "HttpFundamental\\Cookie::addCookieFuncArgument", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_clearCookieFuncArgument", "name": "HttpFundamental\\Cookie::clearCookieFuncArgument", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_exists", "name": "HttpFundamental\\Cookie::exists", "doc": "&quot;Test if a cookie exists&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_read", "name": "HttpFundamental\\Cookie::read", "doc": "&quot;Get a cookie value&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_send", "name": "HttpFundamental\\Cookie::send", "doc": "&quot;Set a cookie value&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_addInCookie", "name": "HttpFundamental\\Cookie::addInCookie", "doc": "&quot;Add a variable value in a cookie&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Cookie", "fromLink": "HttpFundamental/Cookie.html", "link": "HttpFundamental/Cookie.html#method_clear", "name": "HttpFundamental\\Cookie::clear", "doc": "&quot;Clear a cookie&quot;"},
            
            {"type": "Class", "fromName": "HttpFundamental", "fromLink": "HttpFundamental.html", "link": "HttpFundamental/HttpStatus.html", "name": "HttpFundamental\\HttpStatus", "doc": "&quot;List of HTTP status codes&quot;"},
                    
            {"type": "Class", "fromName": "HttpFundamental", "fromLink": "HttpFundamental.html", "link": "HttpFundamental/Request.html", "name": "HttpFundamental\\Request", "doc": "&quot;The global request class&quot;"},
                                                        {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_create", "name": "HttpFundamental\\Request::create", "doc": "&quot;Static constructor : defines the current URL and gets the routes&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method___construct", "name": "HttpFundamental\\Request::__construct", "doc": "&quot;Constructor : defines the request URL and the object rewrite flag&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_guessFromCurrent", "name": "HttpFundamental\\Request::guessFromCurrent", "doc": "&quot;Populate the request object with current HTTP request values&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_setFlag", "name": "HttpFundamental\\Request::setFlag", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getFlag", "name": "HttpFundamental\\Request::getFlag", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_setUrl", "name": "HttpFundamental\\Request::setUrl", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getUrl", "name": "HttpFundamental\\Request::getUrl", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_setProtocol", "name": "HttpFundamental\\Request::setProtocol", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getProtocol", "name": "HttpFundamental\\Request::getProtocol", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_setMethod", "name": "HttpFundamental\\Request::setMethod", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getMethod", "name": "HttpFundamental\\Request::getMethod", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_setHeaders", "name": "HttpFundamental\\Request::setHeaders", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getHeaders", "name": "HttpFundamental\\Request::getHeaders", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getHeader", "name": "HttpFundamental\\Request::getHeader", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_setArguments", "name": "HttpFundamental\\Request::setArguments", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getArguments", "name": "HttpFundamental\\Request::getArguments", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getArgument", "name": "HttpFundamental\\Request::getArgument", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_setData", "name": "HttpFundamental\\Request::setData", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getData", "name": "HttpFundamental\\Request::getData", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_setFiles", "name": "HttpFundamental\\Request::setFiles", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getFiles", "name": "HttpFundamental\\Request::getFiles", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getFile", "name": "HttpFundamental\\Request::getFile", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_setSession", "name": "HttpFundamental\\Request::setSession", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getSession", "name": "HttpFundamental\\Request::getSession", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_setCookies", "name": "HttpFundamental\\Request::setCookies", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getCookies", "name": "HttpFundamental\\Request::getCookies", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getCookie", "name": "HttpFundamental\\Request::getCookie", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_setAuthentication", "name": "HttpFundamental\\Request::setAuthentication", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_setAuthenticationType", "name": "HttpFundamental\\Request::setAuthenticationType", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_setAuthenticationUser", "name": "HttpFundamental\\Request::setAuthenticationUser", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_setAuthenticationPassword", "name": "HttpFundamental\\Request::setAuthenticationPassword", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getAuthentication", "name": "HttpFundamental\\Request::getAuthentication", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_buildUrl", "name": "HttpFundamental\\Request::buildUrl", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_isAjax", "name": "HttpFundamental\\Request::isAjax", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_isCli", "name": "HttpFundamental\\Request::isCli", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_isGet", "name": "HttpFundamental\\Request::isGet", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_isPost", "name": "HttpFundamental\\Request::isPost", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_isPut", "name": "HttpFundamental\\Request::isPut", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getGet", "name": "HttpFundamental\\Request::getGet", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getPost", "name": "HttpFundamental\\Request::getPost", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getGetOrPost", "name": "HttpFundamental\\Request::getGetOrPost", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getPostOrGet", "name": "HttpFundamental\\Request::getPostOrGet", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_cleanArgument", "name": "HttpFundamental\\Request::cleanArgument", "doc": "&quot;Clean the value taken from request arguments or data&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getEnvironment", "name": "HttpFundamental\\Request::getEnvironment", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getReferer", "name": "HttpFundamental\\Request::getReferer", "doc": "&quot;Get the current request referer if available&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getClientIp", "name": "HttpFundamental\\Request::getClientIp", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Request", "fromLink": "HttpFundamental/Request.html", "link": "HttpFundamental/Request.html#method_getallheaders", "name": "HttpFundamental\\Request::getallheaders", "doc": "&quot;Emulation of internal &lt;code&gt;getallheaders()&lt;\/code&gt; function as it does not exist each time&quot;"},
            
            {"type": "Class", "fromName": "HttpFundamental", "fromLink": "HttpFundamental.html", "link": "HttpFundamental/Response.html", "name": "HttpFundamental\\Response", "doc": "&quot;The global HTTP response class&quot;"},
                                                        {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method___construct", "name": "HttpFundamental\\Response::__construct", "doc": "&quot;Constructor : defines the current URL and gets the routes&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method___toString", "name": "HttpFundamental\\Response::__toString", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_setProtocol", "name": "HttpFundamental\\Response::setProtocol", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_getProtocol", "name": "HttpFundamental\\Response::getProtocol", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_setStatus", "name": "HttpFundamental\\Response::setStatus", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_getStatus", "name": "HttpFundamental\\Response::getStatus", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_setCharset", "name": "HttpFundamental\\Response::setCharset", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_getCharset", "name": "HttpFundamental\\Response::getCharset", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_addContent", "name": "HttpFundamental\\Response::addContent", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_setContents", "name": "HttpFundamental\\Response::setContents", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_getContent", "name": "HttpFundamental\\Response::getContent", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_getContents", "name": "HttpFundamental\\Response::getContents", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_getContentsAsString", "name": "HttpFundamental\\Response::getContentsAsString", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_setContentType", "name": "HttpFundamental\\Response::setContentType", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_getContentType", "name": "HttpFundamental\\Response::getContentType", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_guessContentType", "name": "HttpFundamental\\Response::guessContentType", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_setHeaders", "name": "HttpFundamental\\Response::setHeaders", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_addHeader", "name": "HttpFundamental\\Response::addHeader", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_getHeaders", "name": "HttpFundamental\\Response::getHeaders", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_getHeader", "name": "HttpFundamental\\Response::getHeader", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_hasHeader", "name": "HttpFundamental\\Response::hasHeader", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_renderHeaders", "name": "HttpFundamental\\Response::renderHeaders", "doc": "&quot;\n&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_header", "name": "HttpFundamental\\Response::header", "doc": "&quot;Writes a header string if headers had not been sent&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_send", "name": "HttpFundamental\\Response::send", "doc": "&quot;Send the response to the device&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_download", "name": "HttpFundamental\\Response::download", "doc": "&quot;Force client to download a file&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_flush", "name": "HttpFundamental\\Response::flush", "doc": "&quot;Flush (display) a file content&quot;"},
                    {"type": "Method", "fromName": "HttpFundamental\\Response", "fromLink": "HttpFundamental/Response.html", "link": "HttpFundamental/Response.html#method_redirect", "name": "HttpFundamental\\Response::redirect", "doc": "&quot;\n&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


