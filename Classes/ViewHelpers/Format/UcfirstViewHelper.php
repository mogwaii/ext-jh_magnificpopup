<?php
namespace JonathanHeilmann\JhMagnificpopup\ViewHelpers\Format;

/*
 * This file is part of the JonathanHeilmann\JhMagnificpopup extension under GPLv2 or later.
 *
 * For the full copyright and license information, please read the
 * LICENSE.md file that was distributed with this source code.
 */

use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

/**
 * Class AddJsInlineCodeViewHelper
 * @package JonathanHeilmann\JhMagnificpopup\ViewHelpers\PageRenderer
 */
class UcfirstViewHelper extends AbstractViewHelper
{

    /**
     * @param string $string
     * @return string
     */
    public function render($string = null)
    {
        if ($string === null) $string = $this->renderChildren();

        return ucfirst($string);
    }

}