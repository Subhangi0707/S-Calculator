function sin(){
    document.calculator.result.value=Math.sin(document.calculator.result.value);
    }
    function cos(){
    document.calculator.result.value=Math.cos(document.calculator.result.value);
    }
    function tan(){
    document.calculator.result.value=Math.tan(document.calculator.result.value);
    }
    function BACKSPC(){
        var a= document.calculator.result.value;
        document.calculator.result.value = a.substr(0,a.length-1);
    }
    function square(){
        document.calculator.result.value = Math.pow(document.calculator.result.value, 2);
    }
    function qubbed(){
        document.calculator.result.value = Math.pow(document.calculator.result.value, 3);
    }
    function sqrt2(){
        document.calculator.result.value = Math.pow(document.calculator.result.value, 1/2);
    }
    function sqrt3(){
        document.calculator.result.value = Math.pow(document.calculator.result.value, 1/3);
    }
    function number(value){
        document.calculator.result.value += value;
    }
    function remv(){
        document.calculator.result.value =" ";
    }
    function equal(){
        document.calculator.result.value =eval(document.calculator.result.value);
    }
    function log(){
        document.calculator.result.value = Math.log(document.calculator.result.value);
    }
    function e(){
        document.calculator.result.value = 2.71828182846;
    }
    function pi(){
        document.calculator.result.value = 3.14159265359;
    }
    function fact(){
        var i, num, f;
        f=1
        num=document.calculator.result.value;
        for(i=1;i<=num;i++){
            f=f*i;
        }
        i=i-1;
        document.calculator.result.value=f;
    }  
    function inv(){
        document.calculator.result.value = 1/document.calculator.result.value;
    }

    function solve(){
        ans=document.calculator.result;
        str=ans.value;
    
        n=ans.value.length;
        
        a="",b="";
        f=false;
       
        for(i=0;i<n;i++){
            if(f==true){
                b+=str[i];
            }
            if(str[i]=='^'){
                f=true;
             }
            if(f==false){
    a+=str[i];
            }
        }
         ans.value=Math.pow(a,b);
    }
