import { Injectable } from '@angular/core';
import * as jsPDF from 'jspdf'
import * as domtoimage from 'dom-to-image';

import * as _ from 'lodash';
import * as moment from 'moment';

const PDF_WIDTH = 210;
const PDF_HEIGHT = 297;
const BASE64_MARKER = ';base64,';

@Injectable()
export class PdfGenerationService {

    constructor() {

    }

    getBase64Image(img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        document.body.removeChild(canvas);
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    }

    //Call it like this :  getBase64FromImageUrl("images/slbltxt.png")
    getImageFromUrl = function(url, callback?) {
        var img = new Image, data, ret={data: null, pending: true};
        img.setAttribute('crossOrigin', 'anonymous');
        img.onerror = function() {
            throw new Error('Cannot load image: "'+url+'"');
        }
        img.onload = function() {
            var canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
            canvas.width = img.width;
            canvas.height = img.height;
    
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            // Grab the image as a jpeg encoded in base64, but only the data
            var dataURL = canvas.toDataURL("image/png");
    
            data = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

            // Convert the data to binary form
            data = atob(data);
            document.body.removeChild(canvas);
                        
            ret['data'] = data;
            ret['pending'] = false;

            if (typeof callback === 'function') {
                callback(data);
            }
        }
        img.src = url;
    
        return ret;
    }
    convertDomToImage(node) {
        domtoimage.toPng(node).then(
            dataUrl => {
            let img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img);
        })
        .catch(error=> {
            console.error('oops, something went wrong!', error);
        });    
    }
	setStringAsDateFormat(value: string, dateFormat: string) {
		if (!value){
			return '';
		}else if (dateFormat.trim() == ''){
			return value;
		}
		let result = moment(value).format(dateFormat).toString();
		return result;
    }
    
    generatePdfFromTemplateForm(fontSize:number = 14) {
    }

}