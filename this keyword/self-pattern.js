const user = {
    salute:' ',
    greet: function(){
        this.salute ='Hello',
        console.log(this.salute);

        const setFrench=function (newSalute){
            this.salute = newSalute;
        }
        setFrench.bind(this,'Bonjue')();
        console.log(this.salute);
    }
}
user.greet();