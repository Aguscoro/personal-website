// The featured projects rendered as cards in the Projects section.
// `repo` and `demo` are optional — leave them out and the link is not rendered.

export const projects = [
  {
    id: 'celicatesen',
    title: 'Celicatesen',
    description:
      'A storefront for a working gluten-free bakery, running on a REST API I wrote from scratch: the catalogue is served by Express and MongoDB, and a JWT-authenticated panel behind it manages the products.',
    tags: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/Aguscoro/Celicatesen',
    demo: 'https://celicatesen.vercel.app',
  },
  {
    id: 'countries-mvvm',
    title: 'Countries MVVM',
    description:
      'A cross-platform mobile app in .NET MAUI, organised around MVVM with its own service layer for navigation and device sensors, and covered by unit and integration tests.',
    tags: ['C#', '.NET MAUI', 'MVVM', 'Testing'],
    repo: 'https://github.com/Aguscoro/Parcial-I-Moviles',
    demo: null,
  },
]
