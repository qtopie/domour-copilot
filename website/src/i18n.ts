import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  zh: {
    translation: {
      title: 'Domour Copilot',
      subtitle: '您的 AI 驱动开发助手',
      description: '为开发者量身打造，集成最新 AI 模型，助力高效编程。',
      install: '安装指引',
      terminal: '命令行安装 (推荐)',
      manual: '手动下载',
      windows: 'Windows (PowerShell)',
      macos_linux: 'macOS / Linux (curl)',
      copy: '复制',
      copied: '已复制',
      download: '下载',
      footer: '© 2024 Domour Copilot. 保留所有权利。',
      terminal_instruction: '复制以下命令并在终端中执行：',
      manual_instruction: '选择您的平台下载安装包：',
    }
  },
  en: {
    translation: {
      title: 'Domour Copilot',
      subtitle: 'Your AI-Powered Development Assistant',
      description: 'Tailored for developers, integrated with latest AI models for high-efficiency coding.',
      install: 'Installation',
      terminal: 'Terminal (Recommended)',
      manual: 'Manual Download',
      windows: 'Windows (PowerShell)',
      macos_linux: 'macOS / Linux (curl)',
      copy: 'Copy',
      copied: 'Copied',
      download: 'Download',
      footer: '© 2024 Domour Copilot. All rights reserved.',
      terminal_instruction: 'Copy and run the following command in your terminal:',
      manual_instruction: 'Choose your platform to download:',
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh', // Set Chinese as default as requested
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
