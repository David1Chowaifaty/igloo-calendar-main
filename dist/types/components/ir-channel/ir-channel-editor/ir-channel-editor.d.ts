import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrChannelEditor {
  channel_status: 'create' | 'edit' | null;
  selectedTab: string;
  headerTitles: {
    id: string;
    name: string;
    disabled: boolean;
  }[];
  selectedRoomType: any[];
  closeSideBar: EventEmitter<null>;
  componentWillLoad(): void;
  handleTabChange(e: CustomEvent): void;
  renderTabScreen(): any;
  enableAllHeaders(): void;
  disableNonFirstTabs(): void;
  render(): any;
}
