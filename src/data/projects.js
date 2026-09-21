// The featured projects rendered as cards in the Projects section.
// `repo` and `demo` are optional — leave them out and the link is not rendered.

export const projects = [
  {
    id: 'celicatesen',
    title: 'Celicatesen',
    description:
      'A storefront and admin panel for a working gluten-free bakery, backed by a REST API I wrote from scratch: product CRUD on Express and MongoDB, a JWT-authenticated admin area, and hashed credentials.',
    tags: ['JavaScript', 'Node.js', 'Express', 'MongoDB'],
    repo: 'https://github.com/Aguscoro/Celicatesen',
    demo: null,
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
