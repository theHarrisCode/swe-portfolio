import { alias } from 'react-app-rewire-alias'

export const resolve = {
    extensions: ['js', 'ts'],
    alias: {
        '@': path.resolve(__dirname, 'src'),
        '@assets': path.resolve(__dirname, 'src/assets'),
        '@component': path.resolve(__dirname, 'src/compnent')
    }
}