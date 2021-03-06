import React, { Component } from "react";
import PropTypes from "prop-types";
import { translate } from "react-i18next";

import StyledInput from "../../components/input";
// import StyledSection from "../../components/section";
import StyledTitleHeader from "../../components/title-header";

class Social extends Component {
  static propTypes = {
    data: PropTypes.string,
    updateOption: PropTypes.func,
    t: PropTypes.func,
  };

  static defaultProps = {
    data: JSON.stringify({
      twitter: "",
      github: "",
      instagram: "",
      facebook: "",
    }),
  };

  state = {
    social: JSON.parse(this.props.data),
  };

  updateOption = (option, value) => {
    const newState = { social: { ...this.state.social } };
    newState.social[option] = value;
    this.setState(newState);
    this.props.updateOption("social", JSON.stringify(newState.social));
  };

  render() {
    const { t } = this.props;
    return (
      <section>
        <StyledTitleHeader
          title={t("social.title")}
          subtitle={t("social.tagline")}
        />
        <div>
          <StyledInput
            label="Twitter"
            value={this.state.social.twitter}
            type="text"
            placeholder={t("social.twitter.placeholder")}
            onChange={e => this.updateOption("twitter", e.target.value)}
          />

          <StyledInput
            label="Facebook"
            value={this.state.social.facebook}
            type="text"
            placeholder={t("social.fb.placeholder")}
            onChange={e => this.updateOption("facebook", e.target.value)}
          />

          <StyledInput
            label="Instagram"
            value={this.state.social.instagram}
            type="text"
            placeholder={t("social.ig.placeholder")}
            onChange={e => this.updateOption("instagram", e.target.value)}
          />

          <StyledInput
            label="Github"
            value={this.state.social.github}
            type="text"
            placeholder={t("social.gh.placeholder")}
            onChange={e => this.updateOption("github", e.target.value)}
          />
        </div>
      </section>
    );
  }
}

export default translate("translations")(Social);
