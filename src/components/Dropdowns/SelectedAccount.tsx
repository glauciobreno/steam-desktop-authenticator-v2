import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useTranslation } from 'react-i18next';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faArrowsRotate, faUserMinus, faUserSlash } from '@fortawesome/free-solid-svg-icons';

const SelectedAccount = () => {
	const { t } = useTranslation();

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button
					className="inline-flex w-full justify-center items-center rounded-md bg-black bg-opacity-20 px-3 py-1.5 text-xs font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
					{t('Selected Account')}
					<ChevronDownIcon className="ml-2 -mr-1 h-5 w-5 text-white"
						aria-hidden="true" />
				</Menu.Button>
			</div>
			<Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
				<Menu.Items
					className="z-20 absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="px-1 py-1 ">
						<Menu.Item>
							{({ active }) => (
								<button className={`${ active ? 'bg-violet-500 text-white' : 'text-gray-900' } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}>
									<FontAwesomeIcon icon={faRightToBracket}/>
									{t('Login again')}
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button className={`${ active ? 'bg-violet-500 text-white' : 'text-gray-900' } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}>
									<FontAwesomeIcon icon={faArrowsRotate}/>
									{t('Force session refresh')}
								</button>
							)}
						</Menu.Item>
					</div>
					<div className="px-1 py-1">
						<Menu.Item>
							{({ active }) => (
								<button className={`${ active ? 'bg-violet-500 text-white' : 'text-gray-900' } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}>
									<FontAwesomeIcon icon={faUserMinus}/>
									{t('Remove from manifest')}
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button className={`${ active ? 'bg-violet-500 text-white' : 'text-gray-900' } group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2`}>
									<FontAwesomeIcon icon={faUserSlash}/>
									{t('Deactivate authenticator')}
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default SelectedAccount;