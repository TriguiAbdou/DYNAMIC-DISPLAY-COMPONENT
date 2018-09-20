import { JqxBarGaugeModule } from './jqx-bar-gauge.module';

describe('JqxBarGaugeModule', () => {
  let jqxBarGaugeModule: JqxBarGaugeModule;

  beforeEach(() => {
    jqxBarGaugeModule = new JqxBarGaugeModule();
  });

  it('should create an instance', () => {
    expect(jqxBarGaugeModule).toBeTruthy();
  });
});
