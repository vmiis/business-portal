(function(){
    var modules={
        "2-columns-contents": 			{url:"$A/modules/2/2-columns-contents.html",router:1},

        "about":  		  	  			       {url:"$A/modules/a/about.html",router:1},
        "autocomplete-data":  			       {url:"$A/modules/a/autocomplete-data.html",Table:"autocomplete",form_module:"autocomplete-form",router:1},
        "autocomplete-form":  			       {url:"$A/modules/a/autocomplete-form.html",Table:"autocomplete"},
        "a-basic-application-framework-index": {url:"$A/apps/a/a-basic-application-framework/index.html"},
        "angularjs-hello-world":	           {url:"$A/modules/a/angularjs-hello-world.html",router:1},


        "bubble":  		  	  			        {url:"$A/modules/b/bubble.html",router:1},
        
        "clinical-trials-data-entry": 	{url:"$A/modules/c/clinical-trials-data-entry.html"},
        "carousel":  		  			{url:"$A/modules/c/carousel.html",router:1},
        "checkbox-data":      			{url:"$A/modules/c/checkbox-data.html",Table:"checkbox",form_module:"checkbox-form",router:1},
        "checkbox-form":      			{url:"$A/modules/c/checkbox-form.html",Table:"checkbox"},
        "consent-data":  	  		    {url:"$A/modules/c/consent-data.html",Table:"consent",form_module:"consent-form"},
        "consent-form":  	  		    {url:"$A/modules/c/consent-form.html",Table:"consent"},
        "color-data":      	  			{url:"$A/modules/c/color-data.html",Table:"color",form_module:"color-form",router:1},
        "color-form":      	  			{url:"$A/modules/c/color-form.html",Table:"color"},
        "coming-soon": 		            {url:"$A/modules/u/under-construction.html",text:"Coming soon...",router:1},


        "d-c-t-data":      	  			{url:"$A/modules/d/data-collection-template-data.html","App":"demo",Table:"template",form_module:"d-c-t-form",router:1},
        "d-c-t-form":      	 		 	{url:"$A/modules/d/data-collection-template-form.html","App":"demo",Table:"template"},
        "date-data":      	  			{url:"$A/modules/d/date-data.html",Table:"Notes",form_module:"date-form",router:1},
        "date-form":      	 		 	{url:"$A/modules/d/date-form.html",Table:"Notes"},          
        "dass-data":	 	            {url:"$A/modules/d/depression-anxiety-stress-scales-data.html",Table:"dass",form_module:"dass-form"},
        "dass-form":	 	            {url:"$A/modules/d/depression-anxiety-stress-scales-form.html",Table:"dass"},

        "enquiry-data":      	  		{url:"$A/modules/e/enquiry-data.html",Table:"vm-enquiry",form_module:"enquiry-form"},
        "enquiry-form":      	  		{url:"$A/modules/e/enquiry-form.html",Table:"vm-enquiry"},         

        "ffs-data":      	  			{url:"$A/modules/f/flinders-fatigue-scale-data.html",Table:"ffs",form_module:"ffs-form"},
        "ffs-form":      	  			{url:"$A/modules/f/flinders-fatigue-scale-form.html",Table:"ffs"},
        "file-data":      	  			{url:"$A/modules/f/file-data.html",Table:"file",form_module:"file-form",router:1},
        "file-form":      	  			{url:"$A/modules/f/file-form.html",Table:"file"},
        "fss-data":      	  			{url:"$A/modules/f/fatigue-severity-scale-data.html",Table:"fss",form_module:"fss-form"},
        "fss-form":      	  			{url:"$A/modules/f/fatigue-severity-scale-form.html",Table:"fss"},
        "form-maker":                   {url:"$A/modules/f/form-maker.html",router:1},
        "fountains-illumination":		{url:"$A/modules/f/fountains-illumination.html",router:1},
        "frame":                        {url:"$A/modules/f/frame.html"},
        "form-text-input-fields":       {url:"$A/modules/f/form-text-input-fields.html",router:1},

        

        "hello-world": 		  			{url:"$A/modules/h/hello-world.html",router:1},

        "incosact-data":   	  			{url:"$A/modules/i/incosact-data.html",Table:"incosact",form_module:"incosact-english-form",router:1},
        "incosact-english-form":  		{url:"$A/modules/i/incosact-english-form.html",Table:"incosact",router:1},
        "incosact-thanks-english":      {url:"$A/modules/i/incosact-thanks-english.html",router:1},
        "isi-data":      	  			{url:"$A/modules/i/insomnia-severity-index-data.html",Table:"isi",form_module:"isi-form"},
        "isi-form":      	  			{url:"$A/modules/i/insomnia-severity-index-form.html",Table:"isi"},

        "layout-with-fixed-header-and-footer-index":                {url:"$A/apps/l/layout-with-fixed-header-and-footer/index.html"},
        "layout-with-fixed-header-and-scrollable-footer-index":     {url:"$A/apps/l/layout-with-fixed-header-and-scrollable-footer/index.html"},
        "layout-with-scrollable-header-and-footer-index":           {url:"$A/apps/l/layout-with-scrollable-header-and-footer/index.html"},
        "layout-with-side-nav-and-fixed-footer-index":              {url:"$A/apps/l/layout-with-side-nav-and-fixed-footer/index.html"},
        "long-page":  		  	 		                            {url:"$A/modules/l/long-page.html",router:1},

        "medical-history-wf-data":      {url:"$A/modules/m/medical-history-wf-data.html",Table:"medical-history-wf",form_module:"medical-history-wf-form"},
        "medical-history-wf-form":      {url:"$A/modules/m/medical-history-wf-form.html",Table:"medical-history-wf"},
        "medication-data":              {url:"$A/modules/m/medication-data.html",Table:"medication",form_module:"medication-form"},
        "medication-form":              {url:"$A/modules/m/medication-form.html",Table:"medication"},
        "medical-practitioners-data":  	{url:"$A/modules/m/medical-practitioners-data.html",Table:"vm-medical-practitioners",form_module:"medical-practitioners-form",router:1},
        "medical-practitioners-form":  	{url:"$A/modules/m/medical-practitioners-form.html",Table:"vm-medical-practitioners"},



        "nasa":  		  	  			{url:"$A/modules/n/nasa.html",router:1},
        "not-ready": 		            {url:"$A/modules/u/under-construction.html",text:"Not Ready",router:1},
        "nyan":  		  	  			{url:"$A/modules/n/nyan.html",router:1},

        "online-questionnaire-setup": 	    {url:"$A/modules/o/online-questionnaire-setup.html",Table:"participant"},
        

        "panel":    		  			{url:"$A/modules/p/panel.html",router:1},
        "particle":  		  			{url:"$A/modules/p/particle.html",router:1},
        "prices":  		  	  			{url:"$A/modules/p/prices.html",router:1},
        "psqi-data":                    {url:"$A/modules/p/pittsburgh-sleep-quality-index-data.html",Table:"psqi",form_module:"psqi-form"},
        "psqi-form":   			        {url:"$A/modules/p/pittsburgh-sleep-quality-index-form.html",Table:"psqi"},

        "quest-panel":                  {url:"$A/modules/o/online-questionnaire-panel.html"},

        "radio-data":      	  			{url:"$A/modules/r/radio-data.html",Table:"radio",form_module:"radio-form",router:1},
        "radio-form":      	  			{url:"$A/modules/r/radio-form.html",Table:"radio"},
        

        
        "reactjs-hello-world":                  {url:"$A/modules/r/reactjs-hello-world.html",router:1},
        "reactjs-tic-tac-toe-passing-value":    {url:"$A/modules/r/reactjs-tic-tac-toe-passing-value.html",router:1},
        "reactjs-tic-tac-toe-starter":          {url:"$A/modules/r/reactjs-tic-tac-toe-starter.html",router:1},

        "screen-failure":      			{url:"$A/modules/s/screen-failure-thank-you-page.html",router:1},
        "select-data":        			{url:"$A/modules/s/select-data.html",Table:"select",form_module:"select-form",router:1},
        "select-form":        			{url:"$A/modules/s/select-form.html",Table:"select"},
        "services":  	  	  			{url:"$A/modules/s/services.html",router:1},
        "short-page":  		  	 		{url:"$A/modules/s/short-page.html",router:1},
        "snow":  		  	  			{url:"$A/modules/s/snow.html",router:1},

        "text-input-data":    			{url:"$A/modules/t/text-input-data.html",Table:"text-input",form_module:"text-input-form",router:1},
        "text-input-form":    			{url:"$A/modules/t/text-input-form.html",Table:"text-input"},
        "tom-knowledge-base-data":    	{url:"https://www.tomliweb.com/modules/t/tom-knowledge-base-data.html",Table:"tom-knowledge-base",form_module:"tom-knowledge-base-form",router:1},
        "tom-knowledge-base-form":    	{url:"https://www.tomliweb.com/modules/t/tom-knowledge-base-form.html",Table:"tom-knowledge-base"},
        "text-input-form":    			{url:"$A/modules/t/text-input-form.html",Table:"text-input"},
        
        "trainers":  		  			{url:"$A/modules/t/trainers.html",router:1},

        "under-construction": 		    {url:"$A/modules/u/under-construction.html",text:"Under Construction",router:1},

        "visit-date-data":    			{url:"$A/modules/v/visit-date-data.html",Table:"visit-date",form_module:"visit-date-form"},
        "visit-date-form":    			{url:"$A/modules/v/visit-date-form.html",Table:"visit-date"},
    
    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
