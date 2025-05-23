/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: uxt9vFaCd33rdvxeE5TgZm
// Component: NPtCun56Yx90

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: uxt9vFaCd33rdvxeE5TgZm/projectcss
import sty from "./PlasmicMenuButton.module.css"; // plasmic-import: NPtCun56Yx90/css

import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: ai1f3COsvKKd/icon
import TimesIcon from "./icons/PlasmicIcon__Times"; // plasmic-import: tlFaRAylRFIl/icon

createPlasmicElementProxy;

export type PlasmicMenuButton__VariantMembers = {
  expanded: "expanded";
};
export type PlasmicMenuButton__VariantsArgs = {
  expanded?: SingleBooleanChoiceArg<"expanded">;
};
type VariantPropType = keyof PlasmicMenuButton__VariantsArgs;
export const PlasmicMenuButton__VariantProps = new Array<VariantPropType>(
  "expanded"
);

export type PlasmicMenuButton__ArgsType = { href?: string };
type ArgPropType = keyof PlasmicMenuButton__ArgsType;
export const PlasmicMenuButton__ArgProps = new Array<ArgPropType>("href");

export type PlasmicMenuButton__OverridesType = {
  root?: Flex__<"button">;
  freeBox?: Flex__<"div">;
};

export interface DefaultMenuButtonProps {
  href?: string;
  expanded?: SingleBooleanChoiceArg<"expanded">;
  className?: string;
}

const $$ = {};

function PlasmicMenuButton__RenderFunc(props: {
  variants: PlasmicMenuButton__VariantsArgs;
  args: PlasmicMenuButton__ArgsType;
  overrides: PlasmicMenuButton__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          href: "#"
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "expanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.expanded
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxexpanded]: hasVariant($state, "expanded", "expanded")
        })}
      >
        <BarsIcon
          className={classNames(projectcss.all, sty.svg__aIoYb, {
            [sty.svgexpanded__aIoYb8Ajzt]: hasVariant(
              $state,
              "expanded",
              "expanded"
            )
          })}
          role={"img"}
        />

        <TimesIcon
          className={classNames(projectcss.all, sty.svg__x8Rwd, {
            [sty.svgexpanded__x8Rwd8Ajzt]: hasVariant(
              $state,
              "expanded",
              "expanded"
            )
          })}
          role={"img"}
        />
      </div>
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuButton__VariantsArgs;
    args?: PlasmicMenuButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMenuButton__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicMenuButton__ArgProps,
          internalVariantPropNames: PlasmicMenuButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenuButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuButton";
  } else {
    func.displayName = `PlasmicMenuButton.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuButton = Object.assign(
  // Top-level PlasmicMenuButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicMenuButton
    internalVariantProps: PlasmicMenuButton__VariantProps,
    internalArgProps: PlasmicMenuButton__ArgProps
  }
);

export default PlasmicMenuButton;
/* prettier-ignore-end */
