import React from 'react';
import { Spacer, Paragraph } from '@jp-olvera/jp-viaducto-components';

export const AppName = ({ label }: any) => (
  <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
    <img src='https://i.pravatar.cc/24' alt='avatar' style={{ borderRadius: '50%' }} />
    <Spacer direction='horizontal' size='lg' />
    <Paragraph lineHeight='1.375rem'>{label}</Paragraph>
  </div>
);

export const appsData = [
  {
    expandible: null,
    id: '1',
    app_name: 'Atlassian',
    app_name_display: 'Atlassian',
    type: 'Productivity',
    installed_by: 'Sysadmin',
    user_group: 'Everyone',
    expense_period: '$499.00',
  },
  {
    expandible: null,
    id: '2',
    app_name: 'Twitter',
    app_name_display: 'Twitter',
    type: 'Social',
    installed_by: 'Sysadmin',
    user_group: 'Marketing',
    expense_period: '$499.00',
  },
  {
    expandible: null,
    id: '3',
    app_name: 'Facebook',
    app_name_display: 'Facebook',
    type: 'Social',
    installed_by: 'Sysadmin',
    user_group: 'Marketing',
    expense_period: '$499.00',
  },
  {
    expandible: null,
    id: '4',
    app_name: 'Zoom',
    app_name_display: 'Zoom',
    type: 'Productivity',
    installed_by: 'Sysadmin',
    user_group: 'Everyone',
    expense_period: '$499.00',
  },
  {
    expandible: null,
    id: '5',
    app_name: 'YouTube',
    app_name_display: 'YouTube',
    type: 'Social',
    installed_by: 'Sysadmin',
    user_group: 'Marketing',
    expense_period: '$499.00',
  },
  {
    expandible: null,
    id: '6',
    app_name: 'Google Drive',
    app_name_display: 'Google Drive',
    type: 'Storage',
    installed_by: 'Sysadmin',
    user_group: 'Everyone',
    expense_period: '$499.00',
  },
  {
    expandible: null,
    id: '7',
    app_name: 'Dropbox',
    app_name_display: 'Dropbox',
    type: 'Storage',
    installed_by: 'Sysadmin',
    user_group: 'Everyone',
    expense_period: '$499.00',
  },
  {
    expandible: null,
    id: '8',
    app_name: 'We transfer',
    app_name_display: 'We transfer',
    type: 'Storage',
    installed_by: 'Sysadmin',
    user_group: 'Desing',
    expense_period: '$499.00',
  },
  {
    expandible: null,
    id: '9',
    app_name: 'Zillow',
    app_name_display: 'Zillow',
    type: 'Real state',
    installed_by: 'Sysadmin',
    user_group: 'Sales',
    expense_period: '$499.00',
  },
];
