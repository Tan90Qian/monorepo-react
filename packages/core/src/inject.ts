import "reflect-metadata";

type Constructor<T = any> = new (...args: any[]) => T;

export const Injectable = (): ClassDecorator => target => {}; // eslint-disable-line

export const Factory = <T extends object>(
  target: Constructor<T>
): T => {
  // 获取所有注入的服务
  const providers = Reflect.getMetadata("design:paramtypes", target) || []; // [OtherService]
  const args = providers.map((provider: Constructor) => {
    return Factory(provider);
  });
  return new target(...args); // eslint-disable-line
};
