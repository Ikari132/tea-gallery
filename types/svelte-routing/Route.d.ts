import { SvelteComponent, SvelteComponentTyped } from 'svelte';

interface LinkProps {
    to: string
    replace?: boolean
    state?: {
        [k in string | number]: unknown
    }
    getProps?: (linkParams: GetPropsParams) => Record<string, any>
}

interface GetPropsParams {
    location: RouteLocation
    href: string
    isPartiallyCurrent: boolean
    isCurrent: boolean
}

type Link = SvelteComponentTyped<
    Omit<LinkProps & svelte.JSX.HTMLProps<HTMLAnchorElement> & svelte.JSX.SapperAnchorProps, 'href'>
>



interface RouteProps {
    path?: string
    component?: SvelteComponent
    [additionalProp: string]: unknown
}

interface RouteSlots {
    default: {
        location: RouteLocation
        params: RouteParams
    }
}

interface RouteLocation {
    pathname: string
    search: string
    hash?: string
    state: {
        [k in string | number]: unknown
    }
}

interface RouteParams {
    [param: string]: string
}

type Route = SvelteComponentTyped<RouteProps, Record<string, any>, RouteSlots>



interface RouterProps {
    basepath?: string
    url?: string
}

type Router = SvelteComponentTyped<RouterProps>



type link = (node: Element) => { destroy(): void }
type links = (node: Element) => { destroy(): void }


type navigate = (
    to: string,
    {
        replace,
        state
    }: {
        replace?: boolean
        state: {
            [k in string | number]: unknown
        }
    }
) => void

export { navigate }
export { link, links }
export { Router }
export { Route, RouteLocation }
export { Link }