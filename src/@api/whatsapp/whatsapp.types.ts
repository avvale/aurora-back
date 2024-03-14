export interface WhatsappPayload
{
    object: string;
    entry: WhatsappEntry[];
}

export interface WhatsappEntry
{
    id: string;
    changes: WhatsappChange[];
}

export interface WhatsappChange
{
    field: string;
    value: WhatsappValue;
}

export interface WhatsappValue
{
    messaging_product: string;
    metadata: WhatsappMetadata;
    contacts: WhatsappContact[];
    messages: WhatsappMessage[];
}

export interface WhatsappMetadata
{
    display_phone_number: string;
    phone_number_id: string;
}

export interface WhatsappContact
{
    wa_id: string;
    profile: WhatsappProfile;
}

export interface WhatsappProfile
{
    name: string;
}

export type WhatsappMessageTypes = 'text' | 'reaction' | 'image'  | 'sticker' | 'unknown' | 'button' | 'interactive' | 'order' | 'system';

export interface WhatsappMessage
{
    from: string;
    id: string;
    timestamp: string;
    type: WhatsappMessageTypes;
    reaction?: WhatsappReaction;
    text?: WhatsappMessageText;
    sticker?: WhatsappSticker;
    location?: WhatsappLocation;
    button?: WhatsappButton;
}

export interface WhatsappMessageText
{
    body: string;
}

export interface WhatsappReaction
{
    message_id: string;
    emoji: string;
}

export interface WhatsappSticker
{
    mime_type: string;
    sha256: string;
    id: string;
}

export interface WhatsappLocation
{
    latitude: string;
    longitude: string;
    name: string;
    address: string;
}

export interface WhatsappButton
{
    text: string;
    payload: string;
}
