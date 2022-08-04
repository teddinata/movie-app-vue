const ratingMixin = {
    methods: {
        getRatingColor() {
			if(this.movie.rating > 7 ) return "#5eb85e";

			if(this.movie.rating > 4) return "#f9a825";

			return "#e10505";
		},
    },
}

export default ratingMixin