import {Directive, Input, Output, EventEmitter, HostListener} from '@angular/core';

/**
 * 在数据库使用类似 0 1 值存储Boolean类型时
 * 用于nz-switch组件自定义双向绑定开关组件的值
 *
 * @author chaimzhang
 * @since 2021/06/01 22:38
 */
@Directive({
  selector: 'nz-switch[switchValue]',
  exportAs: 'switchValue'
})
export class NzSwitchValueDirective {
  /* 真值 在开关变为开启状态时发射 */
  @Input() truthValue: any = '1';
  /* 假值 在开关变为关闭状态时发射 */
  @Input() falseValue: any = '0';
  /* 双向绑定开关值 */
  @Input() switchValue: any;
  /* 双向绑定开关值 */
  @Output() switchValueChange = new EventEmitter<any>();

  @HostListener('ngModelChange', ['$event'])
  private onSwitchChange(val: boolean) {
    this.switchValueChange.emit(val ? this.truthValue : this.falseValue);
  }
}
