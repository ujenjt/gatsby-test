import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from '@webteam/button';
import Input from '@webteam/input';
import Switcher from '@webteam/switcher';
import {DownIcon} from '@webteam/icons';

import styles from './form.pcss';

import { ProjectSettings } from '../project-settings';

export const Form = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    expandStyles: {
      transitionDuration: '300ms'
    },
    collapseStyles: {
      transitionDuration: '300ms'
    }
  });
  return (
    <div className="form-container">
      <div className="project-name-wrapper">
        <h3 className="wt-h3">Project Name</h3>
        <Input className="wt-offset-top-12" placeholder="Ktor Project 01"/>
      </div>

      <div className="rect wt-offset-top-48">
        <div className="wt-text-2 form-container__adjust" {...getToggleProps()}>
          Adjust project settings
          <DownIcon
            size="s"
            className={cn('form-container__toggle', { 'form-container__toggle_open': isExpanded })}
          />
        </div>
        <Button
          size="m"
          mode="contrast"
          theme="dark"
        >
          Add Features

        </Button>
      </div>
      <ProjectSettings {...getCollapseProps()}/>
    </div>
  );
};

Form.propTypes = {

};
