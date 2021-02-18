import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSkills } from "../../actions/skillsAction";
import PropTypes from "prop-types";

export class All extends Component {
  componentDidMount() {
    this.props.fetchSkills();
  }
  render() {
    const skills = this.props.skill.map((post) => {
      console.log(post);
      return (
        <div key={post._id}>
          <div className="custom-card">
            <div className="image">
              <img src={post.imgUrl} alt="Project DP" />
            </div>
            <div className="work-details">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <p>{post.type}</p>
              <div className="pt-2 pb-4">
                <a href={post.url}>Check</a>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div className="work-grid">{skills}</div>;
  }
}

All.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.array,
};

const mapStateToProps = (state) => ({
  skill: state.skill.items,
});

export default connect(mapStateToProps, {
  fetchSkills,
})(All);
