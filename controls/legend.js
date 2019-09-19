import Control from '../components/control.js';

export default class Legend extends Control { 
		
	constructor(options) {	
		super(null, options);
		
		this._container = this.Node('root');
		
        var radioLayers = ['pr', 'cd', 'csd', 'da', 'db'];
        this.radios = {};
        
        for (var k of radioLayers) {
            this.radios[k] = this.Node('rd' + k.toUpperCase());
        };
                
		this.current = 'csd'; //leave to specify default layer
		
		this.radios[this.current].checked = true;
		
        for (var t in this.radios) {
            this.radios[t].addEventListener('change', this.onChange_Handler.bind(this, t));
        };        
	}
	
	onChange_Handler(layer, ev) {
		this.radios[this.current].checked = false;		
		this._map.setLayoutProperty(this.current, 'visibility', 'none');
		this.current = layer;		
		this._map.setLayoutProperty(this.current, 'visibility', 'visible');
	}
	
	Template() {
        var radioHTML = "";
        var radioLayers = ['pr', 'cd', 'csd', 'da', 'db']; // local array duplicate of array in line 10 not great...
        for (var  w of radioLayers) {
            radioHTML += "<label><input handle='rd" + w.toUpperCase() + "' type='radio' name='boundary'>nls(Label_" + w.toUpperCase() + ")</label>";
        };
        
		return "<div handle='root' class='legend mapboxgl-ctrl mapboxgl-ctrl-group'>" +
				  "<div class='legend-label'>nls(Toc_Legend)</div>" +
				  "<div class='legend-container'>" +
					"<div class='legend-item legend-item-1'>" + 
						"<div class='legend-icon'></div>" +
						"<div>nls(Legend_Item_1)</div>" +
					"</div>" +
					
					"<div class='legend-item legend-item-2'>" + 
						"<div class='legend-icon'></div>" +
						"<div>nls(Legend_Item_2)</div>" +
					"</div>" +
				  "</div>" +
				  
				  "<div class='legend-label'>nls(Toc_Instruction)</div>" +
				  "<div class='legend-container toc-container'>" +
            
					radioHTML +
            
				  "</div>" +
			  "</div>";
	}
}
