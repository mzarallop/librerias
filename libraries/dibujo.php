<?php

class Dibujo extends bar_outline
{
	var $offset;

	function bar_sketch( $alpha, $offset, $colour, $outline_colour )
	{
		parent::bar_outline( $alpha, $colour, $outline_colour );
		$this->var = 'bar_sketch';
		$this->offset = $offset;
	}

	// override the base method
	function _get_variable_list()
	{
		$values = array();
		$values[] = $this->alpha;
		$values[] = $this->offset;
		$values[] = $this->colour;
		$values[] = $this->outline_colour;

		if( $this->_key )
		{
			$values[] = $this->key;
			$values[] = $this->key_size;
		}

		return $values;
	}
}
?>