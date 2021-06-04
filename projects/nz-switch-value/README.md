# NZ-SWITCH-VALUE
An Angular directive for customizing the binding value of nz-switch.

[![npm](https://img.shields.io/npm/dm/nz-switch-value)](https://www.npmjs.com/package/nz-switch-value)
[![NPM](https://img.shields.io/npm/l/nz-switch-value)](https://github.com/chaimzhang/ng-lib/blob/main/LICENSE)
[![npm](https://img.shields.io/npm/v/nz-switch-value)](https://www.npmjs.com/package/nz-switch-value)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/nz-switch-value)](https://www.npmjs.com/package/nz-switch-value)

English | [简体中文](README-zh_CN.md)

## Environment Support

* Angular `>=8`
* ng-zorro-antd `>=8`

## Installation

- npm

```bash
$ npm install nz-switch-value
```

- yarn

```bash
$ yarn add nz-switch-value
```

## Usage

### API

|  参数   | 说明  | 类型 | 默认值 |
|  :----  | :----  | :----:  | :----:  |
| `[(switchValue)]`  | 双向绑定自定义值 | `any` | ----  |
| `[truthValue]`  |  自定义真值 | `any` | `'1'`  |
| `[falseValue]`  |  自定义假值 | `any` | `'0'`  |
| `(switchValueChange)`  | 开关状态变化时的回调 | `EventEmitter<any>`  | ----  |

### Example

Import the directive modules you want to use into your `app.module.ts` file.

```ts
import {NzSwitchValueModule} from 'nz-switch-value';

@NgModule({
  imports: [
    NzSwitchValueModule
  ]
})
export class AppModule {
}

```

```ts
export class WelcomeComponent {
  val = 0;

  onSwitchChange(val: any) {
    console.log(val);
  }
}
```

```angular2html

<nz-switch [ngModel]="val==1"
           [(switchValue)]="val"
           [truthValue]="1"
           [falseValue]="0"
           (switchValueChange)="onSwitchChange($event)">
</nz-switch>
```
