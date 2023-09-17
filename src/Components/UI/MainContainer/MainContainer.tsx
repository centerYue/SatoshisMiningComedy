import React from 'react';
import classnames from 'classnames';
import styles from './MainContainer.module.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const MainContainer = ({ children, className = '', style = {} }: Props): JSX.Element => {
  return (
    <div className={classnames(styles.MainContainer, className)} style={style}>
      {children}
    </div>
  );
};

export default MainContainer;
