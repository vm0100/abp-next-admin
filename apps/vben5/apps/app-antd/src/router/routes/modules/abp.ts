import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'https://abp.io/assets/favicon.ico/favicon-16x16.png',
      keepAlive: true,
      order: 1000,
      title: $t('abp.title'),
    },
    name: 'AbpFramework',
    path: '/abp',
    children: [
      {
        meta: {
          title: $t('abp.manage.title'),
          icon: 'arcticons:activity-manager',
        },
        name: 'Manage',
        path: '/manage',
        children: [
          {
            meta: {
              title: $t('abp.manage.identity.title'),
              icon: 'teenyicons:id-outline',
            },
            name: 'Identity',
            path: '/manage/identity',
            children: [
              {
                component: () => import('#/views/identity/users/index.vue'),
                name: 'Users',
                path: '/manage/identity/users',
                meta: {
                  title: $t('abp.manage.identity.user'),
                  icon: 'mdi:user-outline',
                },
              },
              {
                component: () => import('#/views/identity/roles/index.vue'),
                name: 'Roles',
                path: '/manage/identity/roles',
                meta: {
                  title: $t('abp.manage.identity.role'),
                  icon: 'carbon:user-role',
                },
              },
              {
                component: () =>
                  import('#/views/identity/claim-types/index.vue'),
                name: 'ClaimTypes',
                path: '/manage/identity/claim-types',
                meta: {
                  title: $t('abp.manage.identity.claimTypes'),
                  icon: 'la:id-card-solid',
                },
              },
              {
                component: () =>
                  import('#/views/identity/security-logs/index.vue'),
                name: 'SecurityLogs',
                path: '/manage/identity/security-logs',
                meta: {
                  title: $t('abp.manage.identity.securityLogs'),
                  icon: 'carbon:security',
                },
              },
              {
                component: () =>
                  import('#/views/identity/organization-units/index.vue'),
                name: 'OrganizationUnits',
                path: '/manage/identity/organization-units',
                meta: {
                  title: $t('abp.manage.identity.organizationUnits'),
                  icon: 'clarity:organization-line',
                },
              },
            ],
          },
          {
            meta: {
              title: $t('abp.manage.identity.auditLogs'),
              icon: 'fluent-mdl2:compliance-audit',
            },
            name: 'AuditingAuditLogs',
            path: '/manage/audit-logs',
            component: () => import('#/views/auditing/audit-logs/index.vue'),
          },
        ],
      },
      {
        meta: {
          title: $t('abp.openiddict.title'),
          icon: 'mdi:openid',
        },
        name: 'OpenIddict',
        path: '/openiddict',
        children: [
          {
            meta: {
              title: $t('abp.openiddict.applications'),
              icon: 'carbon:application',
            },
            name: 'OpenIddictApplications',
            path: '/openiddict/applications',
            component: () =>
              import('#/views/openiddict/applications/index.vue'),
          },
          {
            meta: {
              title: $t('abp.openiddict.authorizations'),
              icon: 'arcticons:ente-authenticator',
            },
            name: 'OpenIddictAuthorizations',
            path: '/openiddict/authorizations',
            component: () =>
              import('#/views/openiddict/authorizations/index.vue'),
          },
          {
            meta: {
              title: $t('abp.openiddict.scopes'),
              icon: 'et:scope',
            },
            name: 'OpenIddictScopes',
            path: '/openiddict/scopes',
            component: () => import('#/views/openiddict/scopes/index.vue'),
          },
          {
            meta: {
              title: $t('abp.openiddict.tokens'),
              icon: 'oui:token-key',
            },
            name: 'OpenIddictTokens',
            path: '/openiddict/tokens',
            component: () => import('#/views/openiddict/tokens/index.vue'),
          },
        ],
      },
    ],
  },
];

export default routes;
