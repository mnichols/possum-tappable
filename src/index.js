'use strict';

import stampit from 'stampit'

export default stampit()
.init(function(){
    let originalHandle = this.handle
    let originalTransition = this.transition
    const noop = () => { }
    this.handling = (this.handling || noop)
    this.transitioning = (this.transitioning || noop)
    this.handle = (...args) => {
        //tap
        this.handling(...args)
        return originalHandle(...args)
    }
    this.transition = (...args) => {
        //tap
        this.transitioning(...args)
        return originalTransition(...args)
    }
})

