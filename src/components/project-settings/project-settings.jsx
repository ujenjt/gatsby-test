import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Button from "@webteam/button";
import Input from "@webteam/input";
import Switcher from "@webteam/switcher";
import {Select} from "@webteam/select";


import styles from "./project-settings.pcss";

export const ProjectSettings = (props) => {
  const [buildSystemValue, setBuildSystemValue] = useState("kotlin")
  return (
    <div {...props} className="project-settings">
      <div className="project-settings__content">
        <div className="project-settings__row">
          <div className="wt-text-2 wt-text-2_hardness_hard wt-text-2_theme_dark project-settings__row-label">Build system</div>
          <Switcher
            theme="dark"
            size="xs"
            value={buildSystemValue}
            onChange={val => setBuildSystemValue(val)}
            options={[
              {label:"Gradle Kotlin", value: "kotlin"},
              {label:"Gradle Groovy", value: "groovy"},
              {label:"Maven", value: "maven"},
            ]}
          />
        </div>

        <div className="project-settings__row">
          <div className="wt-text-2 wt-text-2_hardness_hard wt-text-2_theme_dark project-settings__row-label">Artifact</div>
          <Input
            size="s"
            theme="light"
            className="project-settings__row-input"
            placeholder="example.com"
            note={<div className="project-settings__note">Domain is used to determine the package name</div>}
          />
        </div>

        <div className="project-settings__row">
          <div className="wt-text-2 wt-text-2_hardness_hard wt-text-2_theme_dark project-settings__row-label">Ktor version</div>
          <Select
            size="s"
            theme="light"
            className="project-settings__row-input"
            options={[
              {label:"Ktor 1.4.3", value: "Ktor 1.4.3"},
              {label:"Ktor 1.5.1", value: "Ktor 1.5.1"},
              {label:"Ktor 1.5.2", value: "Ktor 1.5.2"},
              {label:"Ktor 1.5.3", value: "Ktor 1.5.3"},
            ]}
          />
        </div>

        <div className="project-settings__row">
          <div className="wt-text-2 wt-text-2_hardness_hard wt-text-2_theme_dark project-settings__row-label">Engine</div>
          <Select
            size="s"
            theme="light"
            className="project-settings__row-input"
            options={[
              {label:"Gradle Kotlin", value: "kotlin"},
              {label:"Gradle Groovy", value: "groovy"},
              {label:"Maven", value: "maven"},
            ]}
            note={<div className="project-settings__note">If unsure, pick the deafault option</div>}
          />
        </div>
      </div>
    </div>
  );
};

ProjectSettings.propTypes = {

};
