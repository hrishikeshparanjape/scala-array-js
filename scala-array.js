/*
    Copyright(c) 2011 Hrishikesh Paranjape
    hrishikeshp19@gmail.com
    http://www.github.com/hrishikeshparanjape
*/
Array.prototype.first=function(){
	"use strict";return this[0];
};
Array.prototype.last=function(){
	"use strict";return this[this.length-1];
};
Array.prototype.foldLeft=function(initialValue){
	"use strict";var arr=this;
	return function(expression){
		var ret=initialValue,len=arr.length;
		for (var i=0;i<len;i++){
			ret=expression(ret,arr[i]);
		}
		return ret;
	};
};
Array.prototype.tail=function(){
	"use strict";return this.slice(1);
};
Array.prototype.take=function(n){
	"use strict";return this.slice(0,n);
};
Array.prototype.takeRight=function(n){
	"use strict";return this.slice(this.length-n);
};
Array.prototype.toIndexedArray=function(){
	"use strict";var len=this.length;
	var ret=[];
	for (var i=0;i<len;i++){
		ret.push({index:i,value:this[i]});
	}
	return ret;
};
Array.prototype.find=function(predicate){
	"use strict";var len=this.length;
	for (var i=0;i<len;i++){
		if(predicate(this[i])){
			return i;
		}
	}
};