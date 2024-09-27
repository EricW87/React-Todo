import React from "react";

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: "" };
    };

    onSearch = () => {
        //event.preventDefault();
        this.props.setSearch(this.state.search);
        console.log(this.state.search);
    };

    onClear = () => {
        //event.preventDefault();
        this.setState({ search: "" }, 
            () => this.props.setSearch(this.state.search)
        );
    };

    onEnter = event => {
        if(event.keyCode === 13)
            this.onSearch()

        console.log(event.keyCode);
    }

    changeHandler = event => {
        this.setState({ search: event.target.value });
    };

    render() {
        return (
            <div className="search">
                <input
                    type="text"
                    value={this.state.search}
                    onChange={this.changeHandler}
                    onKeyDown={this.onEnter}
                />
                <button onClick={() => this.onSearch()}>Search</button>
                <button onClick={() => this.onClear()}>Clear</button>
            </div>
        );
    };
};

export default SearchForm;