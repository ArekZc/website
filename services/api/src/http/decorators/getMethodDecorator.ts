export function get(path: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        target.$route = ['GET', path];
    };
}
