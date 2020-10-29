import { IApi } from '@umijs/types';

export default function(api: IApi) {
  api.chainWebpack(config => {
    config.resolve.symlinks(false);
    return config;
  });
}
