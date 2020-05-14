class FollowToggle {
    constructor(el) {   
        this.$el = $(el);
        this.userid = this.$el.data("user-id");
        this.followstate = this.$el.data("initial-follow-state");
        this.render();
        this.$el.on('click', this.handleClick.bind(this));
        // this.handleClick(); //bind(this)
    }

    render(){
        if (this.followstate === 'followed') {
            this.$el.text('UnFollow');
        } else {
            this.$el.text('Follow');
        }
    }

    handleClick(event){
        // debugger;
        const followToggle = this;
            event.preventDefault();

        if (this.followstate === 'unfollowed') {
            this.followstate = 'followed'
            this.render();
            $.ajax({
                method: "POST",
                url: '/users/:id/follow',
                dataType: 'jason'
            })
        } else { //this.followstate === 'followed'
            this.followstate = 'unfollowed'
            this.render();
            $.ajax({
                method: "DELETE",
                url: '/users/:id/follow',
                dataType: 'jason'
            })
        }
    }
}

module.exports = FollowToggle;