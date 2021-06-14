import { PageHeader, Tabs } from 'antd';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  SettingsCachesLocation,
  SettingsLocation,
  SettingsSchemasLocation,
  SettingsScrapersLocation,
  SettingsSkinsLocation,
} from '../../locations';
import { cookieVars } from '../../utils';
import { Caches } from './Tabs/Caches';
import { Schemas } from './Tabs/Schemas';
import { Scrapers } from './Tabs/Scrapers';
import { Skins } from './Tabs/Skins';

const { TabPane } = Tabs;

export const SettingsView = () => {
  const history = useHistory();
  const location = useLocation();
  let subPath = location.pathname.replace(SettingsLocation, '');

  const [currentTab, setCurrentTab] = useState(
    (subPath && subPath.length > 0 ? location.pathname : null) ||
      Cookies.get(cookieVars.settings_current_tab) ||
      SettingsScrapersLocation
  );

  const onTabChange = (key: string) => {
    Cookies.set(cookieVars.settings_current_tab, key);
    history.push(key);
    setCurrentTab(key);
  };

  const title = 'Settings';
  return (
    <>
      <PageHeader title={title} />
      <Tabs defaultActiveKey={currentTab} onChange={(key) => onTabChange(key)}>
        <TabPane tab='Scrapers' key={SettingsScrapersLocation}>
          <Scrapers />
        </TabPane>
        <TabPane tab='Caches' key={SettingsCachesLocation}>
          <Caches />
        </TabPane>
        <TabPane tab='Skins' key={SettingsSkinsLocation}>
          <Skins />
        </TabPane>
        <TabPane tab='Schemas' key={SettingsSchemasLocation}>
          <Schemas />
        </TabPane>
      </Tabs>
    </>
  );
};
