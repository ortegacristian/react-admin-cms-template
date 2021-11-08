const navigationLinks = [
  {
    id: '1', icon: 'home-outline', title: 'Brand Name', className: '',
  },
  {
    id: '2', icon: 'book-outline', title: 'Intro', className: 'hovered', url: '/',
  },
  {
    id: '3',
    icon: 'chevron-forward-outline',
    title: 'Common',
    className: '',
    subNavigationLinks: [
      {
        id: '3_1', icon: 'bookmark-outline', title: 'Colores', className: '', url: '/common/colors',
      },
      {
        id: '3_2', icon: 'bookmark-outline', title: 'Tipografia', className: '', url: '/common/typography',
      },
      {
        id: '3_3', icon: 'bookmark-outline', title: 'Avatar', className: '', url: '/common/avatar',
      },
      {
        id: '3_4', icon: 'bookmark-outline', title: 'Insignias', className: '', url: '/common/badges',
      },
      {
        id: '3_5', icon: 'bookmark-outline', title: 'Botones', className: '', url: '/common/buttons',
      },
      {
        id: '3_6', icon: 'bookmark-outline', title: 'Alertas', className: '', url: '/common/alerts',
      },
      {
        id: '3_7', icon: 'bookmark-outline', title: 'Spinners', className: '', url: '/common/spinners',
      },
    ],
  },
  {
    id: '4',
    icon: 'chevron-forward-outline',
    title: 'Forms',
    className: '',
    subNavigationLinks: [
      {
        id: '4_1', icon: 'bookmark-outline', title: 'Input', className: '', url: '/form/input',
      },
      {
        id: '4_2', icon: 'bookmark-outline', title: 'Select', className: '', url: '/form/select',
      },
    ],
  },
  {
    id: '5', icon: 'chevron-forward-outline', title: 'Media', className: '', subNavigationLinks: [],
  },
  {
    id: '6', icon: 'chevron-forward-outline', title: 'Graphics', className: '', subNavigationLinks: [],
  },
  {
    id: '7', icon: 'chevron-forward-outline', title: 'Clipboard', className: '', subNavigationLinks: [],
  },
  {
    id: '8', icon: 'chevron-forward-outline', title: 'Modals', className: '', subNavigationLinks: [],
  },
  {
    id: '9', icon: 'chevron-forward-outline', title: 'Tooltips', className: '', subNavigationLinks: [],
  },
];

export default navigationLinks;
