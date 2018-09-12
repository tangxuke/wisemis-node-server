function Test(){
    this.name='';
    this.visible=true;

    /**
     * 
     * @param {boolean} visible 
     * @returns {Test}
     */
    this.setVisible=function(visible){
        this.visible=visible;
        return this;
    }
    this.show=function(){
        console.log(this.visible);
    }
}

new Test().setVisible(false).show();
new Test().show();