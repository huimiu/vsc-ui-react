/** Validation state for VS Code styled form controls. */
export type VscValidationState = 'error' | 'warning' | 'info';

/** Validation state for direct input controls (info is field-level only). */
export type VscInputValidationState = Exclude<VscValidationState, 'info'>;
