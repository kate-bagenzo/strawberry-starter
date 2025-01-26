<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
xmlns:atom="http://www.w3.org/2005/Atom"
exclude-result-prefixes="atom"
>

<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    <link href="assets/styles/normalize.css" rel="stylesheet" type="text/css" />
    <link href="assets/styles/rss.css" rel="stylesheet" type="text/css" />
    <title><xsl:value-of select="/atom:feed/atom:title"/> RSS Feed</title>
    </head>
    <body>
        <header>
            <h1><xsl:value-of select="atom:feed/atom:title" /> RSS Feed</h1>
            <h2><xsl:value-of select="atom:feed/atom:subtitle" /> </h2>
            <p>by 
                <a href="mailto:{atom:feed/atom:author/atom:email}">
                <xsl:value-of select="atom:feed/atom:author/atom:name" />
                </a>
            </p>
            <time>Last update: <xsl:value-of select="substring(atom:feed/atom:updated, 0, 11)" /></time>
            <p>This is only a preview of the feed. 
            </p>
                <a>
                    <xsl:attribute name="href">
                    <xsl:value-of select="atom:feed/atom:link/@href"/>
                    </xsl:attribute>Add this URL to an RSS reader to subscribe!
                </a>
        </header>
        <xsl:for-each select="/atom:feed/atom:entry">
            <section>
            <h3>
            <a>
            <xsl:attribute name="href">
                <xsl:value-of select="atom:link/@href"/>
            </xsl:attribute>
            <xsl:value-of select="atom:title"/>
            </a>
            </h3>
            <xsl:value-of select="atom:summary"/>
            Updated:
            <xsl:value-of select="substring(atom:updated, 0, 11)" />
            </section>
        </xsl:for-each>
    </body>
</html>
</xsl:template>

</xsl:stylesheet>