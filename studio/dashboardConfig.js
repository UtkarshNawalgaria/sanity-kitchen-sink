export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604efebb8d3ab19b9fd38fa0',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gigf5sr2',
                  apiId: 'afd1c785-5860-4827-a1ca-51af94f1c7d5'
                },
                {
                  buildHookId: '604efebb3849e57dd63742a9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wq7ni5zm',
                  apiId: '86bffd88-737e-4191-bfa9-b3e0155617d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/UtkarshNawalgaria/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wq7ni5zm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
