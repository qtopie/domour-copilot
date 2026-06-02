import React, { useState } from 'react';
import { 
  makeStyles, 
  shorthands, 
  tokens, 
  Button, 
  Title1, 
  Title3, 
  Body1,
  Tab,
  TabList,
  Card,
  type SelectTabData,
  type SelectTabEvent,
  Tooltip,
  Drawer,
  DrawerHeader,
  DrawerHeaderTitle,
  DrawerBody,
} from '@fluentui/react-components';
import { 
  Globe, 
  Copy, 
  Check, 
  Download, 
  Terminal, 
  Layout, 
  Apple, 
  Box,
  Monitor,
  Menu,
  X
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: tokens.colorNeutralBackground1,
    color: tokens.colorNeutralForeground1,
    fontFamily: tokens.fontFamilyBase,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: tokens.colorNeutralBackground1,
    '@media (min-width: 768px)': {
      padding: '20px 40px',
    },
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontWeight: tokens.fontWeightBold,
    fontSize: '18px',
    '@media (min-width: 768px)': {
      fontSize: '20px',
    },
  },
  desktopNav: {
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'flex',
      gap: '10px',
    },
  },
  mobileMenuBtn: {
    display: 'flex',
    '@media (min-width: 768px)': {
      display: 'none',
    },
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 16px',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box',
    '@media (min-width: 768px)': {
      padding: '60px 20px',
    },
  },
  hero: {
    textAlign: 'center',
    marginBottom: '40px',
    maxWidth: '800px',
    '@media (min-width: 768px)': {
      marginBottom: '60px',
    },
  },
  heroTitle: {
    marginBottom: '16px',
    fontSize: '32px',
    lineHeight: '1.2',
    background: 'linear-gradient(45deg, #0078d4, #00bcf2)',
    WebkitBackgroundClip: 'text',
    WebkitFillColor: 'transparent',
    '@media (min-width: 768px)': {
      fontSize: '48px',
      marginBottom: '20px',
    },
  },
  heroSubtitle: {
    marginBottom: '24px',
    fontSize: '20px',
    color: tokens.colorNeutralForeground2,
    '@media (min-width: 768px)': {
      fontSize: '24px',
      marginBottom: '30px',
    },
  },
  screenshotContainer: {
    width: '100%',
    maxWidth: '900px',
    aspectRatio: '16/9',
    backgroundColor: tokens.colorNeutralBackground3,
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
    ...shorthands.margin('30px', '0'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    boxShadow: tokens.shadow64,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    '@media (min-width: 768px)': {
      ...shorthands.margin('40px', '0'),
    },
  },
  screenshot: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  installSection: {
    width: '100%',
    maxWidth: '700px',
    marginTop: '20px',
    '@media (min-width: 768px)': {
      marginTop: '40px',
    },
  },
  card: {
    marginTop: '16px',
    padding: '16px',
    backgroundColor: tokens.colorNeutralBackground2,
    '@media (min-width: 768px)': {
      marginTop: '20px',
      padding: '24px',
    },
  },
  codeBlock: {
    backgroundColor: tokens.colorNeutralBackgroundAlpha,
    padding: '12px',
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    fontFamily: tokens.fontFamilyMonospace,
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '12px',
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    overflowX: 'auto',
    '@media (min-width: 768px)': {
      padding: '16px',
      fontSize: '14px',
      marginTop: '15px',
    },
  },
  codeText: {
    whiteSpace: 'nowrap',
    ...shorthands.overflow('hidden'),
    textOverflow: 'ellipsis',
    marginRight: '10px',
  },
  footer: {
    padding: '30px 20px',
    textAlign: 'center',
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
    color: tokens.colorNeutralForeground4,
    fontSize: '12px',
    '@media (min-width: 768px)': {
      padding: '40px',
    },
  },
  tabContent: {
    marginTop: '16px',
    '@media (min-width: 768px)': {
      marginTop: '20px',
    },
  },
  osTabs: {
    marginBottom: '16px',
    '@media (min-width: 768px)': {
      marginBottom: '20px',
    },
  },
  manualList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '12px',
    '@media (min-width: 768px)': {
      gap: '12px',
      marginTop: '15px',
    },
  },
  manualItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 12px',
    backgroundColor: tokens.colorNeutralBackgroundAlpha,
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    '@media (min-width: 768px)': {
      padding: '12px 16px',
    },
  },
  drawerBody: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
  }
});

const App: React.FC = () => {
  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const [installTab, setInstallTab] = useState<'terminal' | 'manual'>('terminal');
  const [osTab, setOsTab] = useState<'windows' | 'macos_linux'>('windows');
  const [copied, setCopied] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleLanguage = () => {
    const nextLng = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(nextLng);
    setIsDrawerOpen(false);
  };

  const handleInstallTabChange = (_e: SelectTabEvent, data: SelectTabData) => {
    setInstallTab(data.value as 'terminal' | 'manual');
  };

  const handleOsTabChange = (_e: SelectTabEvent, data: SelectTabData) => {
    setOsTab(data.value as 'windows' | 'macos_linux');
  };

  const copyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const winCommand = 'powershell -ExecutionPolicy ByPass -c "irm https://domour.com/install.ps1 | iex"';
  const unixCommand = 'curl -fsSL https://domour.com/install.sh | sh';

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Box size={24} />
          <span>{t('title')}</span>
        </div>
        
        <div className={styles.desktopNav}>
          <Button 
            icon={<Globe size={16} />} 
            appearance="subtle" 
            onClick={toggleLanguage}
          >
            {i18n.language === 'zh' ? 'English' : '中文'}
          </Button>
        </div>

        <Button 
          className={styles.mobileMenuBtn}
          icon={<Menu size={24} />} 
          appearance="subtle" 
          onClick={() => setIsDrawerOpen(true)}
        />
      </header>

      <Drawer
        open={isDrawerOpen}
        onOpenChange={(_, { open }) => setIsDrawerOpen(open)}
        position="end"
      >
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<X size={20} />}
                onClick={() => setIsDrawerOpen(false)}
              />
            }
          >
            Menu
          </DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody className={styles.drawerBody}>
          <Button 
            icon={<Globe size={16} />} 
            appearance="outline" 
            onClick={toggleLanguage}
            style={{ justifyContent: 'start' }}
          >
            {i18n.language === 'zh' ? 'Switch to English' : '切换为中文'}
          </Button>
        </DrawerBody>
      </Drawer>

      <main className={styles.main}>
        <section className={styles.hero}>
          <Title1 className={styles.heroTitle}>{t('title')}</Title1>
          <Title3 className={styles.heroSubtitle}>{t('subtitle')}</Title3>
          <Body1>{t('description')}</Body1>

          <div className={styles.screenshotContainer}>
            <img 
              src="screenshot.png" 
              alt="Domour Copilot Screenshot" 
              className={styles.screenshot}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/900x500/1a1a1a/ffffff?text=Domour+Copilot+Screenshot';
              }}
            />
          </div>
        </section>

        <section className={styles.installSection}>
          <Title3>{t('install')}</Title3>
          
          <TabList selectedValue={installTab} onTabSelect={handleInstallTabChange}>
            <Tab value="terminal" icon={<Terminal size={16} />}>{t('terminal')}</Tab>
            <Tab value="manual" icon={<Download size={16} />}>{t('manual')}</Tab>
          </TabList>

          <Card className={styles.card}>
            {installTab === 'terminal' ? (
              <div className={styles.tabContent}>
                <TabList 
                  size="small" 
                  selectedValue={osTab} 
                  onTabSelect={handleOsTabChange}
                  className={styles.osTabs}
                >
                  <Tab value="windows">{t('windows')}</Tab>
                  <Tab value="macos_linux">{t('macos_linux')}</Tab>
                </TabList>

                <Body1>{t('terminal_instruction')}</Body1>
                
                <div className={styles.codeBlock}>
                  <code className={styles.codeText}>{osTab === 'windows' ? winCommand : unixCommand}</code>
                  <Tooltip content={copied ? t('copied') : t('copy')} relationship="label">
                    <Button 
                      icon={copied ? <Check size={16} /> : <Copy size={16} />} 
                      appearance="subtle"
                      onClick={() => copyCommand(osTab === 'windows' ? winCommand : unixCommand)}
                    />
                  </Tooltip>
                </div>
              </div>
            ) : (
              <div className={styles.tabContent}>
                <Body1>{t('manual_instruction')}</Body1>
                <div className={styles.manualList}>
                  <div className={styles.manualItem}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Monitor size={18} />
                      <span>Windows (.exe)</span>
                    </div>
                    <Button size="small" icon={<Download size={16} />} appearance="primary">{t('download')}</Button>
                  </div>
                  <div className={styles.manualItem}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Apple size={18} />
                      <span>macOS (.dmg)</span>
                    </div>
                    <Button size="small" icon={<Download size={16} />} appearance="primary">{t('download')}</Button>
                  </div>
                  <div className={styles.manualItem}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Layout size={18} />
                      <span>Linux (.deb / .rpm)</span>
                    </div>
                    <Button size="small" icon={<Download size={16} />} appearance="primary">{t('download')}</Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>{t('footer')}</p>
      </footer>
    </div>
  );
};

export default App;
