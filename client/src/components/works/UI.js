import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { uiSkills } from "../../actions/skillsAction";

export class UI extends Component {
  componentDidMount() {
    this.props.uiSkills();
  }

  render() {
    const skills = this.props.skill.map((post) => {
      return (
        <div key={post._id}>
          <div className="custom-card">
            <div className="image"></div>
            <div className="work-details">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <p>{post.type}</p>
              <div className="pt-2 pb-4">
                {/* <Link to={post.url} className="button mr-3">
                  Visit
                </Link> */}
                <Link to={post.github} className="button ml-3">
                  Check
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return <div className="work-grid">{skills}</div>;
  }
}

const mapStateToProps = (state) => ({
  skill: state.skill.filtered,
});

export default connect(mapStateToProps, {
  uiSkills,
})(UI);
