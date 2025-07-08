import type { Schema, Struct } from '@strapi/strapi';

export interface BlogSubject extends Struct.ComponentSchema {
  collectionName: 'components_blog_subjects';
  info: {
    displayName: 'Subject';
    icon: 'italic';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    images: Schema.Attribute.Media<'images' | 'files', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FaqFaqs extends Struct.ComponentSchema {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'faqs';
    icon: 'italic';
  };
  attributes: {
    answer: Schema.Attribute.Blocks & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageContact extends Struct.ComponentSchema {
  collectionName: 'components_homepage_contacts';
  info: {
    description: '';
    displayName: 'contact';
    icon: 'code';
  };
  attributes: {
    button_link: Schema.Attribute.String;
    button_text: Schema.Attribute.String;
    cover: Schema.Attribute.Media<'images' | 'files'>;
    headline: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'archive';
  };
  attributes: {
    button_link: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/projects'>;
    button_text: Schema.Attribute.String;
    cover: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Pioneering unforgettable experiences in Saudi Arabia and beyond, powered by technology and visionary expertise.'>;
    headline: Schema.Attribute.String & Schema.Attribute.DefaultTo<'New Wave'>;
    highlight_text: Schema.Attribute.String;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Ridding the Crest of Innovation in Events & PR'>;
    youtube_link: Schema.Attribute.String;
  };
}

export interface HomepageKeyServices extends Struct.ComponentSchema {
  collectionName: 'components_homepage_key_services';
  info: {
    displayName: 'Key Services';
    icon: 'cog';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface HomepageMarketing extends Struct.ComponentSchema {
  collectionName: 'components_homepage_marketings';
  info: {
    description: '';
    displayName: 'marketing';
    icon: 'heart';
  };
  attributes: {
    avatars: Schema.Attribute.Media<'images' | 'files', true>;
    cover: Schema.Attribute.Media<'images' | 'files'>;
    image: Schema.Attribute.Media<'images' | 'files'>;
    titleLine1: Schema.Attribute.String;
    titleLine2: Schema.Attribute.String;
    titleLine3: Schema.Attribute.String;
    youtube_link: Schema.Attribute.String;
  };
}

export interface ServicesMessages extends Struct.ComponentSchema {
  collectionName: 'components_services_messages';
  info: {
    description: '';
    displayName: 'messages';
    icon: 'bell';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    points: Schema.Attribute.Component<'shared.messages', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Impact Message'>;
  };
}

export interface SharedContentWithVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_with_videos';
  info: {
    description: '';
    displayName: 'content with video';
    icon: 'play';
  };
  attributes: {
    content1: Schema.Attribute.Text;
    content2: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    youtube_link: Schema.Attribute.String;
  };
}

export interface SharedImpactHighlights extends Struct.ComponentSchema {
  collectionName: 'components_shared_impact_highlights';
  info: {
    displayName: 'Impact Highlights';
    icon: 'rocket';
  };
  attributes: {
    count: Schema.Attribute.Integer & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedList extends Struct.ComponentSchema {
  collectionName: 'components_shared_lists';
  info: {
    displayName: 'list';
    icon: 'bulletList';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLocation extends Struct.ComponentSchema {
  collectionName: 'components_shared_locations';
  info: {
    displayName: 'location';
    icon: 'pinMap';
  };
  attributes: {
    lat: Schema.Attribute.Decimal & Schema.Attribute.Required;
    lng: Schema.Attribute.Decimal & Schema.Attribute.Required;
  };
}

export interface SharedLocation2 extends Struct.ComponentSchema {
  collectionName: 'components_shared_location2s';
  info: {
    displayName: 'location2';
    icon: 'earth';
  };
  attributes: {
    lat: Schema.Attribute.Decimal;
    lng: Schema.Attribute.Decimal;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMessages extends Struct.ComponentSchema {
  collectionName: 'components_shared_messages';
  info: {
    description: '';
    displayName: 'points';
    icon: 'file';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    description: '';
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedPageHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_headers';
  info: {
    description: '';
    displayName: 'Page Header';
    icon: 'code';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedProceture extends Struct.ComponentSchema {
  collectionName: 'components_shared_procetures';
  info: {
    description: '';
    displayName: 'Proceture';
    icon: 'archive';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files'>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', false>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSubject extends Struct.ComponentSchema {
  collectionName: 'components_shared_subjects';
  info: {
    displayName: 'subject';
    icon: 'shield';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTitleRich extends Struct.ComponentSchema {
  collectionName: 'components_shared_title_riches';
  info: {
    displayName: 'title_rich';
    icon: 'archive';
  };
  attributes: {
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.subject': BlogSubject;
      'faq.faqs': FaqFaqs;
      'homepage.contact': HomepageContact;
      'homepage.hero': HomepageHero;
      'homepage.key-services': HomepageKeyServices;
      'homepage.marketing': HomepageMarketing;
      'services.messages': ServicesMessages;
      'shared.content-with-video': SharedContentWithVideo;
      'shared.impact-highlights': SharedImpactHighlights;
      'shared.list': SharedList;
      'shared.location': SharedLocation;
      'shared.location2': SharedLocation2;
      'shared.media': SharedMedia;
      'shared.messages': SharedMessages;
      'shared.meta-social': SharedMetaSocial;
      'shared.page-header': SharedPageHeader;
      'shared.proceture': SharedProceture;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.subject': SharedSubject;
      'shared.title-rich': SharedTitleRich;
    }
  }
}
