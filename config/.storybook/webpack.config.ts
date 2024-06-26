import path from 'path'
import webpack from 'webpack'
import {BuildPath} from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPath = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config?.resolve?.modules?.push(paths.src)
    config?.resolve?.extensions?.push('.ts', '.tsx')
    config?.module?.rules?.push(buildCssLoader(true))

    config!.module!.rules = config.module?.rules?.map((rule) => {
        if(/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i};
        }
        return rule
    })

    config?.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })


    return config
}