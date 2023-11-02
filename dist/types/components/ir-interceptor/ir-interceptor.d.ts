export declare class IrInterceptor {
  isShown: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  defaultMessage: {
    loadingMessage: string;
    successMessage: string;
    errorMessage: string;
  };
  handledEndpoints: string[];
  componentWillLoad(): void;
  setupAxiosInterceptors(): void;
  extractEndpoint(url: string): string;
  isHandledEndpoint(url: string): boolean;
  handleRequest(config: any): any;
  handleResponse(response: any): any;
  handleError(error: any): Promise<never>;
  showToast(): void;
  hideToastAfterDelay(isSuccess: boolean): void;
  handleCompletion(message: string, success: boolean): void;
  renderMessage(): string;
  render(): any;
}