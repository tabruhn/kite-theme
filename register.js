// NOT CURRENTLY USED, AS IT WOULD REQUIRE A DEPENDENCY ON CORE.
ReactionCore.registerPackage({
  name: 'reaction-core-theme',
  provides: ['theme'],
  label: 'Core Theme',
  description: 'Provides a basic customizable theme',
  icon: 'fa fa-paint-brush',
  settingsRoute: '',
  defaultSettings: {
    mode: true,
  },
  priority: '2',
  hasWidget: false,
  autoEnable: true
});
