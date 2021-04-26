/** Generate by swagger-axios-codegen */
// @ts-ignore
/* eslint-disable */

/** Generate by swagger-axios-codegen */
/* eslint-disable */
// @ts-ignore
import axiosStatic, { AxiosInstance } from 'axios';

export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
  responseType?: string;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class TagService {
  /**
   *
   */
  static tagControllerAddTag(
    params: {
      /** requestBody */
      body?: CreateTagDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/tag';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static tagControllerRemoveTags(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/tag';

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class CardService {
  /**
   * get all cards
   */
  static cardControllerGetCards(
    params: {
      /** requestBody */
      body?: CardListDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/card';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static cardControllerUpdateCard(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/card';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * get card info by card id
   */
  static cardControllerGetCardDetailById(
    params: {
      /**  */
      cardId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/card/{card_id}';
      url = url.replace('{card_id}', params['cardId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static cardControllerAddCard(
    params: {
      /** requestBody */
      body?: CreateCardDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/card/add';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class DeckService {
  /**
   *
   */
  static deckControllerAddDeck(
    params: {
      /** requestBody */
      body?: CreateDeckDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/deck';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static deckControllerGetDecks(
    params: {
      /**  */
      take: number;
      /**  */
      skip: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/deck';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { take: params['take'], skip: params['skip'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class NoteService {
  /**
   *
   */
  static noteControllerAddNote(
    params: {
      /** requestBody */
      body?: CreateNoteDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/note';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class AuthService {
  /**
   *
   */
  static authControllerVerifyToken(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/token';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static authControllerLogin(
    params: {
      /** requestBody */
      body?: LoginDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/login';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static authControllerRegister(
    params: {
      /** requestBody */
      body?: RegisterUserDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/register';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static authControllerLogout(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/logout';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export interface CreateTagDto {
  /** tag name */
  name: string;

  /** tag type */
  type: number;
}

export interface CardWhereDto {
  /**  */
  deckId: number;

  /**  */
  templateId?: number;

  /**  */
  title?: string;

  /**  */
  status?: EnumCardWhereDtoStatus;
}

export interface CardListDto {
  /**  */
  take: number;

  /**  */
  skip: number;

  /**  */
  where?: CardWhereDto;
}

export interface CreateNoteDto {
  /** template id */
  templateId?: number;

  /** note content */
  content: string;

  /** note type */
  type: EnumCreateNoteDtoType;
}

export interface CreateCardDto {
  /** deck id */
  deckId: number;

  /** card template id */
  templateId?: number;

  /** question of this card */
  title: string;

  /** note list */
  notes: CreateNoteDto[];
}

export interface DeckConfDto {}

export interface CreateDeckDto {
  /** deck name */
  name: string;

  /** deck description */
  description?: string;

  /**  */
  conf?: DeckConfDto;

  /** is it shared to public */
  isPublic?: boolean;
}

export interface LoginDto {
  /** password */
  pwd: string;

  /** email */
  email: string;
}

export interface RegisterUserDto {
  /**  */
  username: string;

  /**  */
  email: string;

  /**  */
  pwd: string;
}
export enum EnumCardWhereDtoStatus {
  'NEW' = 'NEW',
  'LEARNING' = 'LEARNING',
  'REVIEW' = 'REVIEW',
  'RELEARNING' = 'RELEARNING'
}
export enum EnumCreateNoteDtoType {
  'TEXT' = 'TEXT',
  'IMAGE' = 'IMAGE'
}
