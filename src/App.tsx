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
  Tooltip
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
  Monitor
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
    padding: '20px 40px',
    borderBottom: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontWeight: tokens.fontWeightBold,
    fontSize: '20px',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '60px',
    maxWidth: '800px',
  },
  heroTitle: {
    marginBottom: '20px',
    background: 'linear-gradient(45deg, #0078d4, #00bcf2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroSubtitle: {
    marginBottom: '30px',
    color: tokens.colorNeutralForeground2,
  },
  screenshotContainer: {
    width: '100%',
    maxWidth: '900px',
    aspectRatio: '16/9',
    backgroundColor: tokens.colorNeutralBackground3,
    ...shorthands.borderRadius(tokens.borderRadiusXLarge),
    ...shorthands.margin('40px', '0'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    boxShadow: tokens.shadow64,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  screenshot: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  installSection: {
    width: '100%',
    maxWidth: '700px',
    marginTop: '40px',
  },
  card: {
    marginTop: '20px',
    padding: '24px',
    backgroundColor: tokens.colorNeutralBackground2,
  },
  codeBlock: {
    backgroundColor: tokens.colorNeutralBackgroundAlpha,
    padding: '16px',
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    fontFamily: tokens.fontFamilyMonospace,
    fontSize: '14px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px',
    border: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  footer: {
    padding: '40px',
    textAlign: 'center',
    borderTop: `1px solid ${tokens.colorNeutralStroke1}`,
    color: tokens.colorNeutralForeground4,
    fontSize: '12px',
  },
  tabContent: {
    marginTop: '20px',
  },
  osTabs: {
    marginBottom: '20px',
  },
  manualList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '15px',
  },
  manualItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    backgroundColor: tokens.colorNeutralBackgroundAlpha,
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    border: `1px solid ${tokens.colorNeutralStroke2}`,
  }
});

const App: React.FC = () => {
  const styles = useStyles();
  const { t, i18n } = useTranslation();
  const [installTab, setInstallTab] = useState<'terminal' | 'manual'>('terminal');
  const [osTab, setOsTab] = useState<'windows' | 'macos_linux'>('windows');
  const [copied, setCopied] = useState(false);

  const toggleLanguage = () => {
    const nextLng = i18n.language === 'zh' ? 'en' : 'zh';
    i18n.changeLanguage(nextLng);
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
        <Button 
          icon={<Globe size={16} />} 
          appearance="subtle" 
          onClick={toggleLanguage}
        >
          {i18n.language === 'zh' ? 'English' : '中文'}
        </Button>
      </header>

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
                  <code>{osTab === 'windows' ? winCommand : unixCommand}</code>
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
                    <Button icon={<Download size={16} />} appearance="primary">{t('download')}</Button>
                  </div>
                  <div className={styles.manualItem}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Apple size={18} />
                      <span>macOS (.dmg)</span>
                    </div>
                    <Button icon={<Download size={16} />} appearance="primary">{t('download')}</Button>
                  </div>
                  <div className={styles.manualItem}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Layout size={18} />
                      <span>Linux (.deb / .rpm)</span>
                    </div>
                    <Button icon={<Download size={16} />} appearance="primary">{t('download')}</Button>
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
